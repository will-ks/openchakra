import React, { memo } from 'react'
import { IconButton, ButtonGroup, useTheme } from '@chakra-ui/react'
import ColorsControl from '~chakraui/inspector/controls/ColorsControl'
import { GoBold, GoItalic } from 'react-icons/go'
import {
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatAlignCenter,
  MdFormatAlignJustify,
} from 'react-icons/md'
import FormControl from '~chakraui/inspector/controls/FormControl'
import { ComboboxOption } from '@reach/combobox'
import InputSuggestion from '~components/inspector/inputs/InputSuggestion'
import { useForm } from '~hooks/useForm'
import usePropsSelector from '~hooks/usePropsSelector'
import {StylePanelProps} from "~components/inspector/panels/styles/types";
import {isStylePropEnabled, targetStyleProp} from "~core/ComponentDefinitions";

const TextPanel: React.FC<StylePanelProps> = ({
  isRoot,
  panelDef
}) => {
  const { setValue, setValueFromEvent } = useForm()
  const theme = useTheme()

  const fontWeight = usePropsSelector(targetStyleProp('fontWeight', panelDef))
  const fontStyle = usePropsSelector(targetStyleProp('fontStyle', panelDef))
  const textAlign = usePropsSelector(targetStyleProp('textAlign', panelDef))
  const fontSize = usePropsSelector(targetStyleProp('fontSize', panelDef))
  const letterSpacing = usePropsSelector(targetStyleProp('letterSpacing', panelDef))
  const lineHeight = usePropsSelector(targetStyleProp('lineHeight', panelDef))

  return (
    <>
      {
        isStylePropEnabled('fontWeight', panelDef) && isStylePropEnabled('fontStyle', panelDef)
        && <FormControl label="Style">
          <IconButton
            mr={1}
            aria-label="bold"
            icon={<GoBold />}
            onClick={() => {
              setValue(targetStyleProp('fontWeight', panelDef), fontWeight ? null : 'bold')
            }}
            size="xs"
            colorScheme={fontWeight ? 'whatsapp' : 'gray'}
            variant={fontWeight ? 'solid' : 'outline'}
          >
            Bold
          </IconButton>
          <IconButton
            aria-label="italic"
            icon={<GoItalic />}
            onClick={() => {
              setValue(targetStyleProp('fontStyle', panelDef), fontStyle === 'italic' ? null : 'italic')
            }}
            size="xs"
            colorScheme={fontStyle === 'italic' ? 'whatsapp' : 'gray'}
            variant={fontStyle === 'italic' ? 'solid' : 'outline'}
          >
            Italic
          </IconButton>
        </FormControl>

      }

      {
        isStylePropEnabled('textAlign', panelDef)
        && <FormControl label="Text align">
          <ButtonGroup size="xs" isAttached>
            <IconButton
              aria-label="bold"
              icon={<MdFormatAlignLeft />}
              onClick={() => {
                setValue(targetStyleProp('textAlign', panelDef), 'left')
              }}
              colorScheme={textAlign === 'left' ? 'whatsapp' : 'gray'}
              variant={textAlign === 'left' ? 'solid' : 'outline'}
            />

            <IconButton
              aria-label="italic"
              icon={<MdFormatAlignCenter />}
              onClick={() => {
                setValue(targetStyleProp('textAlign', panelDef), 'center')
              }}
              colorScheme={textAlign === 'center' ? 'whatsapp' : 'gray'}
              variant={textAlign === 'center' ? 'solid' : 'outline'}
            />

            <IconButton
              aria-label="italic"
              icon={<MdFormatAlignRight />}
              onClick={() => {
                setValue(targetStyleProp('textAlign', panelDef), 'right')
              }}
              colorScheme={textAlign === 'right' ? 'whatsapp' : 'gray'}
              variant={textAlign === 'right' ? 'solid' : 'outline'}
            />

            <IconButton
              aria-label="italic"
              icon={<MdFormatAlignJustify />}
              onClick={() => {
                setValue(targetStyleProp('textAlign', panelDef), 'justify')
              }}
              colorScheme={textAlign === 'justify' ? 'whatsapp' : 'gray'}
              variant={textAlign === 'justify' ? 'solid' : 'outline'}
            />
          </ButtonGroup>
        </FormControl>
      }
      {
        isStylePropEnabled('fontSize', panelDef)
        && <FormControl label="Font size" htmlFor="fontSize">
          <InputSuggestion
            value={fontSize}
            handleChange={setValueFromEvent}
            name={targetStyleProp("fontSize", panelDef)}
          >
            {Object.keys(theme.fontSizes).map(option => (
              <ComboboxOption key={option} value={option} />
            ))}
          </InputSuggestion>
        </FormControl>
      }

      {
        isStylePropEnabled('color', panelDef)
        &&  <ColorsControl withFullColor enableHues name={targetStyleProp("color", panelDef)} label="Color" />
      }

      {
        isStylePropEnabled('lineHeight', panelDef)
        && <FormControl label="Line height" htmlFor="lineHeight">
          <InputSuggestion
            value={lineHeight}
            handleChange={setValueFromEvent}
            name={targetStyleProp("lineHeight", panelDef)}
          >
            {Object.keys(theme.lineHeights).map(option => (
              <ComboboxOption key={option} value={option} />
            ))}
          </InputSuggestion>
        </FormControl>
      }

      {
        isStylePropEnabled('letterSpacing', panelDef)
        && <FormControl label="Letter spacing" htmlFor="letterSpacing">
          <InputSuggestion
            value={letterSpacing}
            handleChange={setValueFromEvent}
            name={targetStyleProp("letterSpacing", panelDef)}
          >
            {Object.keys(theme.letterSpacings).map(option => (
              <ComboboxOption key={option} value={option} />
            ))}
          </InputSuggestion>
        </FormControl>
      }
    </>
  )
}

export default memo(TextPanel)
