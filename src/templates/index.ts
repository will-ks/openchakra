import { onboarding } from './onboarding'
import { productHunt } from './producthunt'
import { secretchakra } from './secretchakra'
import {IComponents} from "~componentDefsTypes";

export type TemplateType = 'onboarding' | 'ph' | 'secretchakra'

const templates: {
  [id in TemplateType]: IComponents
} = {
  ph: productHunt,
  onboarding,
  secretchakra,
}

export default templates
