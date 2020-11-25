import { number, object, boolean, text, select, date, array, color } from '@storybook/addon-knobs';
/**
 * 转换control 到knobs 
 * @param control 
 */
export const transformKnobs = (control:object) => {
    let knobs = Object.create(null)
    for(const prop in control){
      const _ctrl = control[prop]
      const type = _ctrl.type
      if(type === 'select'){
        knobs[prop] = select(prop,_ctrl.options,_ctrl.default)
      }
      else if(type === 'boolean'){
        knobs[prop] = boolean(prop,_ctrl.default)
      }
      else if(type === 'text'){
        knobs[prop] = text(prop,_ctrl.default)
      }
    }
    return knobs
}