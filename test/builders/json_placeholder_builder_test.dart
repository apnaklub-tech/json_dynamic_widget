import 'package:flutter_test/flutter_test.dart';
import 'package:json_dynamic_widget/json_dynamic_widget.dart';

void main() {
  test('type', () {
    const type = JsonPlaceholderBuilder.type;

    expect(type, 'placeholder');
    expect(
      JsonWidgetRegistry.instance.getWidgetBuilder(type)({})
          is JsonPlaceholderBuilder,
      true,
    );
  });
}
