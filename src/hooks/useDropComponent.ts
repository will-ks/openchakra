import { useDrop, DropTargetMonitor } from 'react-dnd'
import useDispatch from './useDispatch'
import { useOcho } from '~contexts/ocho-context'
import { ComponentItemProps } from '~core/Ocho'

export const useDropComponent = (
  componentId: string,
  accept: string[] = [],
  canDrop: boolean = true,
) => {
  const dispatch = useDispatch()
  const ocho = useOcho()
  let finalAccept = accept
  if (finalAccept.length === 0) {
    finalAccept = ocho.rootDraggables
  }
  const [{ isOver }, drop] = useDrop({
    accept: finalAccept,
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }) && monitor.canDrop(),
    }),
    drop: (item: ComponentItemProps, monitor: DropTargetMonitor) => {
      if (!monitor.isOver()) {
        return
      }

      if (item.isMoved) {
        dispatch.components.moveComponent({
          parentId: componentId,
          componentId: item.id,
        })
      } else if (item.isMeta) {
        //dispatch.components.addMetaComponent(builder[item.type](componentId))
        dispatch.components.addMetaComponent(
          ocho.componentModelBuilders[item.type]!(componentId, ocho),
        )
      } else {
        dispatch.components.addComponent({
          parentName: componentId,
          type: item.type,
          rootParentType: item.rootParentType,
        })
      }
    },
    canDrop: () => canDrop,
  })

  return { drop, isOver }
}
