if ($('#map').length) {
  YMaps.jQuery(function () {
      var map = new YMaps.Map(YMaps.jQuery("#map")[0]);
      var s = new YMaps.Style();
      s.iconStyle = new YMaps.IconStyle();
      s.iconStyle.href = "img/mark.png";
      s.iconStyle.size = new YMaps.Point(100, 49);
      s.iconStyle.offset = new YMaps.Point(0, -60);
      // [55.658301798892744,37.43140457672117]

      var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.43119000, 55.65795607), {style: s, hideIcon: false});
      map.addOverlay(placemark);

      map.setCenter(new YMaps.GeoPoint(37.43333577, 55.65909636), 14);
      map.addControl(new YMaps.TypeControl());
      map.addControl(new YMaps.ToolBar());
      map.addControl(new YMaps.Zoom());
      map.addControl(new YMaps.ScaleLine());
  });
}
