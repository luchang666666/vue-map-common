import t from"@mapbox/mapbox-gl-draw";import"@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";import"@turf/turf";import{nanoid as r}from"nanoid";var s,e={Draw:class extends t{constructor(t){super(t)}},Measure:class extends t{constructor(t){super(t)}onAdd(t){t.on("draw:create",this.drawUpdateHandle),t.on("draw:delete",this.drawUpdateHandle),t.on("draw:update",this.drawUpdateHandle)}drawUpdateHandle(t){console.log(t);const r=this.getAll();console.log(r)}}};!function(t){t.VECTOR="vector",t.GEOJSON="geojson",t.RASTER="raster"}(s||(s={}));var o,a=s;!function(t){t.RASTER="raster"}(o||(o={}));var n=o;class i extends class{constructor(t){const{sourceId:s}=t;this._sourceId=null!=s?s:r(),this.id=null!=s?s:r(),this.type=n.RASTER}getSourceId(){return this._sourceId}}{constructor(t){super(t);const{url:r}=t;this.type=n.RASTER,this.tiles=[r],this.tileSize=256}}var d={TDTTileLayer:class extends class{constructor(t){this._isValidProps(t);const{mapInstance:s,id:e,token:o}=t;this._isValidId(e),this.id=null!=e?e:r(),this.type=a.RASTER,this._token=o}_isValidProps(t){}_isValidId(t){}getLayerId(){return this.id}getToken(){return this._token}getSource(){return this.source}getSourceId(){if(!this.source)throw new Error("not find layer's source");return this.source.getSourceId()}}{constructor(t){super(t);const{url:r,sourceId:s}=t;this.source=new i({url:r,sourceId:s}),this.type=a.RASTER}}};export{e as Control,d as Layer};
//# sourceMappingURL=PIEMapboxGL.js.map