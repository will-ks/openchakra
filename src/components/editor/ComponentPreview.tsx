import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { getComponentBy } from '~core/selectors/components'
import { useComponentDefinitions } from '~contexts/component-definition'

const ComponentPreview: React.FC<{
  componentName: string
}> = ({ componentName, ...forwardedProps }) => {
  const componentDefs = useComponentDefinitions()
  const component = useSelector(getComponentBy(componentName))
  if (!component) {
    console.error(`ComponentPreview unavailable for component ${componentName}`)
  }

  const type = (component && component.type) || null
  if (!type) {
    return null
  }
  const prevCompo = componentDefs.previewComponents[type]
  if (!prevCompo) {
    return null
  }
  const PreviewComponent = prevCompo.previewComponent
  return (
    <PreviewComponent
      component={component}
      type={prevCompo.component}
      {...prevCompo.props}
      {...forwardedProps}
    />
  )

  // switch (type) {
  //   // Simple components
  //   case 'Badge':
  //   case 'Image':
  //   case 'Text':
  //   case 'Link':
  //   case 'Spinner':
  //   case 'Checkbox':
  //   case 'Textarea':
  //   case 'CircularProgress':
  //   case 'Heading':
  //   case 'Switch':
  //   case 'FormLabel':
  //   case 'FormHelperText':
  //   case 'FormErrorMessage':
  //   case 'TabPanel':
  //   case 'Tab':
  //   case 'Input':
  //   case 'Radio':
  //   case 'ListItem':
  //   case 'BreadcrumbLink':
  //     return (
  //       <PreviewContainer
  //         component={component}
  //         type={Chakra[type]}
  //         {...forwardedProps}
  //       />
  //     )
  //   // Wrapped functional components (forward ref issue)
  //   case 'AlertIcon':
  //   case 'Progress':
  //   case 'CloseButton':
  //   case 'AccordionIcon':
  //   case 'Code':
  //   case 'ListIcon':
  //   case 'Divider':
  //   case 'AlertDescription':
  //   case 'AlertTitle':
  //   case 'InputRightAddon':
  //   case 'InputLeftAddon':
  //   case 'Tag':
  //     return (
  //       <PreviewContainer
  //         component={component}
  //         type={Chakra[type]}
  //         {...forwardedProps}
  //         isBoxWrapped
  //       />
  //     )
  //   // Components with childrens
  //   case 'Box':
  //   case 'SimpleGrid':
  //   case 'Flex':
  //   case 'FormControl':
  //   case 'Tabs':
  //   case 'List':
  //   case 'TabList':
  //   case 'TabPanels':
  //   case 'Grid':
  //   case 'Center':
  //   case 'Container':
  //     return (
  //       <WithChildrenPreviewContainer
  //         enableVisualHelper
  //         component={component}
  //         type={Chakra[type]}
  //         {...forwardedProps}
  //       />
  //     )
  //   case 'RadioGroup':
  //   case 'Stack':
  //   case 'InputGroup':
  //     return (
  //       <WithChildrenPreviewContainer
  //         enableVisualHelper
  //         component={component}
  //         type={Chakra[type]}
  //         {...forwardedProps}
  //         isBoxWrapped
  //       />
  //     )
  //   // More complex components
  //   case 'InputRightElement':
  //     return <InputRightElementPreview component={component} />
  //   case 'InputLeftElement':
  //     return <InputLeftElementPreview component={component} />
  //   case 'Avatar':
  //     return <AvatarPreview component={component} />
  //   case 'AvatarBadge':
  //     return <AvatarBadgePreview component={component} />
  //   case 'AvatarGroup':
  //     return <AvatarGroupPreview component={component} />
  //   case 'Alert':
  //     return <AlertPreview component={component} />
  //   case 'Accordion':
  //     return <AccordionPreview component={component} />
  //   case 'AccordionButton':
  //     return <AccordionButtonPreview component={component} />
  //   case 'AccordionItem':
  //     return <AccordionItemPreview component={component} />
  //   case 'AccordionPanel':
  //     return <AccordionPanelPreview component={component} />
  //   case 'AspectRatio':
  //     return <AspectRatioPreview component={component} />
  //   case 'Button':
  //     return <ButtonPreview component={component} />
  //   case 'Breadcrumb':
  //     return <BreadcrumbPreview component={component} />
  //   case 'BreadcrumbItem':
  //     return <BreadcrumbItemPreview component={component} />
  //   case 'Icon':
  //     return <IconPreview component={component} />
  //   case 'IconButton':
  //     return <IconButtonPreview component={component} />
  //   case 'Select':
  //     return <SelectPreview component={component} />
  //   case 'NumberInput':
  //     return <NumberInputPreview component={component} />
  //   default:
  //     return null
  // }
}

export default memo(ComponentPreview)
