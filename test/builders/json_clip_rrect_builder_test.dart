import 'package:flutter_test/flutter_test.dart';
import 'package:json_dynamic_widget/json_dynamic_widget.dart';

void main() {
  test('type', () {
    const type = JsonClipRRectBuilder.type;

    expect(type, 'clip_rrect');
    expect(
      JsonWidgetRegistry.instance.getWidgetBuilder(type)({})
          is JsonClipRRectBuilder,
      true,
    );
  });
}
