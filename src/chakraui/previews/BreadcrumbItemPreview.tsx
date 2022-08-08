import React from 'react'
import { useInteractive } from '~hooks/useInteractive'
import { useDropComponent } from '~hooks/useDropComponent'
import ComponentPreview from '~components/editor/ComponentPreview'
import { BreadcrumbItem } from '@chakra-ui/react'
import { IPreviewProps } from '~core/ComponentDefinitions'
import { ComponentType } from '~core/ComponentDefinitions'

const BreadcrumbItemPreview: React.FC<IPreviewProps> = ({ component }) => {
  const acceptedTypes = ['BreadcrumbLink'] as ComponentType[]
  const { props, ref } = useInteractive(component, true)
  const { drop, isOver } = useDropComponent(component.id, acceptedTypes)

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <BreadcrumbItem {...props} ref={drop(ref)}>
      {component.children.map((key: string) => (
        <ComponentPreview key={key} componentName={key} />
      ))}
    </BreadcrumbItem>
  )
}

export default BreadcrumbItemPreview
