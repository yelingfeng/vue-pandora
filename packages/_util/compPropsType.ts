type ControlContext = {
  type : string,
  options? : string [],
  default? : string | object | boolean
}
export type ControlType = {
 [name : string] :ControlContext
}
