import { IComponents } from '~core/ComponentDefinitions'

export const productHunt: IComponents = {
  root: {
    id: 'root',
    parent: 'root',
    type: 'Box',
    children: ['comp-root', 'comp-K6IB1AANA79Y6'],
    props: {
      backgroundColor: '#f3f3f3',
    },
  },
  'comp-root': {
    id: 'comp-root',
    props: {
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      p: '5',
      boxShadow: 'sm',
    },
    children: ['comp-K6IAUUX80CXD6', 'comp-K6IAWV0WFDNW7'],
    type: 'Box',
    parent: 'root',
    rootParentType: 'Box',
  },
  'comp-K6IAR7ZINSAGW': {
    id: 'comp-K6IAR7ZINSAGW',
    props: {
      children: 'P',
      color: 'white',
      fontSize: '3xl',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K6IAQM3L5NR7W',
    rootParentType: 'Text',
  },
  'comp-K6IASJJIS6V77': {
    id: 'comp-K6IASJJIS6V77',
    props: {
      size: 'md',
      name: 'P',
      fontSize: '3xl',
      backgroundColor: 'orange.500',
    },
    children: [],
    type: 'Avatar',
    parent: 'comp-K6IAUUX80CXD6',
    rootParentType: 'Avatar',
  },
  'comp-K6IATGONJ9KDR': {
    children: [],
    type: 'InputLeftAddon',
    parent: 'comp-K6IATGON2EINZ',
    id: 'comp-K6IATGONJ9KDR',
    props: {
      children: 'Emai',
    },
    rootParentType: 'Input',
  },
  'comp-K6IATGONWXKQC': {
    children: [],
    type: 'Input',
    parent: 'comp-K6IATGON2EINZ',
    id: 'comp-K6IATGONWXKQC',
    props: {
      size: 'md',
      as: 'input',
      variant: 'outline',
      isFullWidth: true,
      focusBorderColor: 'blue.500',
      errorBorderColor: 'red.500',
    },
    rootParentType: 'Input',
  },
  'comp-K6IATGON4BXKS': {
    children: ['comp-K6IATGOOHID42'],
    type: 'InputRightElement',
    parent: 'comp-K6IATGON2EINZ',
    id: 'comp-K6IATGON4BXKS',
    props: {},
    rootParentType: 'Input',
  },
  'comp-K6IATGOOHID42': {
    children: [],
    type: 'Icon',
    parent: 'comp-K6IATGON4BXKS',
    id: 'comp-K6IATGOOHID42',
    props: {
      icon: 'EmailIcon',
    },
    rootParentType: 'Input',
  },
  'comp-K6IATQU9VOYJ0': {
    id: 'comp-K6IATQU9VOYJ0',
    props: {
      display: 'block',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    children: ['comp-K6IATS4IZ7KD8'],
    type: 'InputLeftElement',
    parent: 'comp-K6IATKWZ5I33A',
    rootParentType: 'Input',
  },
  'comp-K6IATS4IZ7KD8': {
    id: 'comp-K6IATS4IZ7KD8',
    props: {
      size: 'md',
      as: 'input',
      variant: 'outline',
      isFullWidth: true,
      focusBorderColor: 'blue.500',
      errorBorderColor: 'red.500',
    },
    children: [],
    type: 'Input',
    parent: 'comp-K6IATQU9VOYJ0',
    rootParentType: 'Input',
  },
  'comp-K6IAUUX80CXD6': {
    id: 'comp-K6IAUUX80CXD6',
    props: {
      isInline: true,
      isReversed: false,

      alignItems: 'center',
      spacing: '3',
    },
    children: [
      'comp-K6IASJJIS6V77',
      'comp-K6IAV6E1J71L7',
      'comp-K6IAVUTA4NRKO',
      'comp-K6IAVYIJ6HPB2',
      'comp-K6IAW325BUPFG',
    ],
    type: 'Stack',
    parent: 'comp-root',
    rootParentType: 'Stack',
  },
  'comp-K6IAV6E1J71L7': {
    id: 'comp-K6IAV6E1J71L7',
    props: {
      size: 'md',
      as: 'input',
      variant: 'outline',
      isFullWidth: true,
      focusBorderColor: 'blue.500',
      errorBorderColor: 'red.500',
      placeholder: 'Discover your next favorite thing.',
    },
    children: [],
    type: 'Input',
    parent: 'comp-K6IAUUX80CXD6',
    rootParentType: 'Input',
  },
  'comp-K6IAVUTA4NRKO': {
    id: 'comp-K6IAVUTA4NRKO',
    props: {
      children: 'Deals',
      color: 'gray.500',
    },
    children: [],
    type: 'Link',
    parent: 'comp-K6IAUUX80CXD6',
    rootParentType: 'Link',
  },
  'comp-K6IAVYIJ6HPB2': {
    id: 'comp-K6IAVYIJ6HPB2',
    props: {
      children: 'Jobs',
      color: 'gray.500',
    },
    children: [],
    type: 'Link',
    parent: 'comp-K6IAUUX80CXD6',
    rootParentType: 'Link',
  },
  'comp-K6IAW325BUPFG': {
    id: 'comp-K6IAW325BUPFG',
    props: {
      children: 'Makers',
      color: 'gray.500',
    },
    children: [],
    type: 'Link',
    parent: 'comp-K6IAUUX80CXD6',
    rootParentType: 'Link',
  },
  'comp-K6IAWV0WFDNW7': {
    id: 'comp-K6IAWV0WFDNW7',
    props: {},
    children: ['comp-K6IAX6IXQ7CAC'],
    type: 'Stack',
    parent: 'comp-root',
    rootParentType: 'Stack',
  },
  'comp-K6IAX6IXQ7CAC': {
    id: 'comp-K6IAX6IXQ7CAC',
    props: {
      size: 'md',
      src:
        'https://pbs.twimg.com/profile_images/1227316457845018626/8-B-ZDL8_400x400.jpg',
    },
    children: ['comp-K6IAYZAIA7RJT'],
    type: 'Avatar',
    parent: 'comp-K6IAWV0WFDNW7',
    rootParentType: 'Avatar',
  },
  'comp-K6IAYZAIA7RJT': {
    id: 'comp-K6IAYZAIA7RJT',
    props: {
      bg: 'green.500',
      size: '1.25em',
      borderColor: 'white',
    },
    children: [],
    type: 'AvatarBadge',
    parent: 'comp-K6IAX6IXQ7CAC',
    rootParentType: 'Avatar',
  },
  'comp-K6IB0ZX2RFMWK': {
    id: 'comp-K6IB0ZX2RFMWK',
    props: {
      width: 'lg',
    },
    children: ['comp-K6IB1HE13Y7BO', 'comp-K6IB3I12GRYPN'],
    type: 'Stack',
    parent: 'comp-K6IB1AANA79Y6',
    rootParentType: 'Stack',
  },
  'comp-K6IB1AANA79Y6': {
    id: 'comp-K6IB1AANA79Y6',
    props: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      mt: '',
      p: '10',
    },
    children: ['comp-K6IB0ZX2RFMWK'],
    type: 'Flex',
    parent: 'root',
    rootParentType: 'Flex',
  },
  'comp-K6IB1HE13Y7BO': {
    id: 'comp-K6IB1HE13Y7BO',
    props: {
      size: 'lg',
      as: 'h2',
      lineHeight: 'shorter',
      fontWeight: 'bold',
      fontFamily: 'heading',
      children: 'Today',
    },
    children: [],
    type: 'Heading',
    parent: 'comp-K6IB0ZX2RFMWK',
    rootParentType: 'Heading',
  },
  'comp-K6IB3I12GRYPN': {
    id: 'comp-K6IB3I12GRYPN',
    props: {
      backgroundColor: 'white',
      border: '',
      borderRadius: 'lg',
      p: '5',
    },
    children: ['comp-K6IB42UQBXOB8'],
    type: 'Stack',
    parent: 'comp-K6IB0ZX2RFMWK',
    rootParentType: 'Stack',
  },
  'comp-K6IB42UQBXOB8': {
    id: 'comp-K6IB42UQBXOB8',
    props: {
      isInline: true,

      spacing: '2',
      alignItems: 'center',
    },
    children: ['comp-K6IB45QVR3QMY', 'comp-K6IB6HDI4V5B0'],
    type: 'Stack',
    parent: 'comp-K6IB3I12GRYPN',
    rootParentType: 'Stack',
  },
  'comp-K6IB45QVR3QMY': {
    id: 'comp-K6IB45QVR3QMY',
    props: {
      height: '80px',
      width: '80px',
      fallbackSrc: 'https://via.placeholder.com/150',
      src:
        'https://user-images.githubusercontent.com/1102595/74273767-41168880-4d11-11ea-8f7f-3fb7a02624ea.gif',
      mr: '2',
    },
    children: [],
    type: 'Image',
    parent: 'comp-K6IB42UQBXOB8',
    rootParentType: 'Image',
  },
  'comp-K6IB6HDI4V5B0': {
    id: 'comp-K6IB6HDI4V5B0',
    props: {
      spacing: '0',
    },
    children: [
      'comp-K6IB6NC6WYM4M',
      'comp-K6IB7CDZP06DC',
      'comp-K6IB9PY4ED4M3',
    ],
    type: 'Stack',
    parent: 'comp-K6IB42UQBXOB8',
    rootParentType: 'Stack',
  },
  'comp-K6IB6NC6WYM4M': {
    id: 'comp-K6IB6NC6WYM4M',
    props: {
      children: 'Open Chakra',
      fontSize: 'lg',
      color: 'gray.700',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K6IB6HDI4V5B0',
    rootParentType: 'Text',
  },
  'comp-K6IB7CDZP06DC': {
    id: 'comp-K6IB7CDZP06DC',
    props: {
      children: 'React visual editor: create UI with ease!',
      fontSize: 'sm',
      color: 'blackAlpha.700',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K6IB6HDI4V5B0',
    rootParentType: 'Text',
  },
  'comp-K6IB9PY4ED4M3': {
    id: 'comp-K6IB9PY4ED4M3',
    props: {
      max: 4,
      spacing: -3,
      size: 'xs',
      p: '',
      pl: '4',
      mt: '2',
    },
    children: [
      'comp-K6IB9SZ4T5MC3',
      'comp-K6IBA48KCVG5Y',
      'comp-K6IBA7B14LO5W',
      'comp-K6IBAM0EEARD9',
      'comp-K6IBAQN0DSH33',
    ],
    type: 'AvatarGroup',
    parent: 'comp-K6IB6HDI4V5B0',
    rootParentType: 'Avatar',
  },
  'comp-K6IB9SZ4T5MC3': {
    id: 'comp-K6IB9SZ4T5MC3',
    props: {
      size: 'xs',
      name: 'Ba Adrie',
    },
    children: [],
    type: 'Avatar',
    parent: 'comp-K6IB9PY4ED4M3',
    rootParentType: 'Avatar',
  },
  'comp-K6IBA48KCVG5Y': {
    id: 'comp-K6IBA48KCVG5Y',
    props: {
      size: 'xs',
      name: 'to tot',
    },
    children: [],
    type: 'Avatar',
    parent: 'comp-K6IB9PY4ED4M3',
    rootParentType: 'Avatar',
  },
  'comp-K6IBA7B14LO5W': {
    id: 'comp-K6IBA7B14LO5W',
    props: {
      size: 'xs',
    },
    children: [],
    type: 'Avatar',
    parent: 'comp-K6IB9PY4ED4M3',
    rootParentType: 'Avatar',
  },
  'comp-K6IBAM0EEARD9': {
    id: 'comp-K6IBAM0EEARD9',
    props: {
      size: 'xs',
    },
    children: [],
    type: 'Avatar',
    parent: 'comp-K6IB9PY4ED4M3',
    rootParentType: 'Avatar',
  },
  'comp-K6IBAQN0DSH33': {
    id: 'comp-K6IBAQN0DSH33',
    props: {
      size: 'md',
    },
    children: [],
    type: 'Avatar',
    parent: 'comp-K6IB9PY4ED4M3',
    rootParentType: 'Avatar',
  },
}
