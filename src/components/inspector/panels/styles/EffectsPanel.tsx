import React, { memo, useMemo } from 'react'
import FormControl from '~chakraui/inspector/controls/FormControl'
import { useForm } from '~hooks/useForm'
import usePropsSelector from '~hooks/usePropsSelector'
import {
  SliderTrack,
  SliderFilledTrack,
  Slider,
  SliderThumb,
} from '@chakra-ui/react'
import TextControl from '~chakraui/inspector/controls/TextControl'
import { StylePanelProps } from '~components/inspector/panels/styles/types'
import { isStylePropEnabled, targetStyleProp } from '~core/Ocho'

const EffectsPanel: React.FC<StylePanelProps> = ({ isRoot, panelDef }) => {
  const { setValue } = useForm()
  const opacity = usePropsSelector(targetStyleProp('opacity', panelDef))

  const normalizedOpacity = useMemo(() => {
    return opacity * 100 || 100
  }, [opacity])

  return (
    <>
      {isStylePropEnabled('opacity', panelDef) && (
        <FormControl label="Opacity">
          <Slider
            min={1}
            onChange={(value: any) =>
              setValue(targetStyleProp('opacity', panelDef), value / 100)
            }
            value={normalizedOpacity}
            mr={2}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </FormControl>
      )}

      {isStylePropEnabled('boxShadow', panelDef) && (
        <TextControl
          name={targetStyleProp('boxShadow', panelDef)}
          label="Box Shadow"
        />
      )}
    </>
  )
}

export default memo(EffectsPanel)
