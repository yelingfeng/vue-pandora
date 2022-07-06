import { PandoraUIComponent } from './component'

export declare class GisMap extends PandoraUIComponent {
  openInfoPanel: (content: string, e: any) => void
  overlayComplete: Fn
  onClickHandler: Fn
  addMarkers: Fn
  markerZoomAdapter: Fn
  drawHeatMap: Fn
  drawCircle: Fn
  drawPolygon: Fn
  drawPolyline: Fn
  drawOverlay: Fn
  openEditorMode: void
  beforeDestory: void
  clearAllOverlay: void
  getOverlayData: any
  isDrawingState: any
}
