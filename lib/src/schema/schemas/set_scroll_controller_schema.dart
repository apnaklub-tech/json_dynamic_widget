import 'package:json_theme/json_theme_schemas.dart';

class SetScrollControllerSchema {
  static const id =
      'https://peiffer-innovations.github.io/flutter_json_schemas/schemas/json_dynamic_widget/set_scroll_controller.json';

  static final schema = {
    r'$schema': 'http://json-schema.org/draft-06/schema#',
    r'$id': id,
    r'$children': 1,
    r'$comment':
        'https://api.flutter.dev/flutter/widgets/ScrollController-class.html',
    'type': 'object',
    'title': 'SetScrollController',
    'additionalProperties': false,
    'properties': {
      SetScrollControllerSchemaProperty.debugLabel: SchemaHelper.stringSchema,
      SetScrollControllerSchemaProperty.initialScrollOffset: SchemaHelper.numberSchema,
      SetScrollControllerSchemaProperty.keepScrollOffset: SchemaHelper.boolSchema,
      SetScrollControllerSchemaProperty.key: SchemaHelper.stringSchema,
    }
  };
}

class SetScrollControllerSchemaProperty {
  static const debugLabel = 'debugLabel';
  static const initialScrollOffset = 'initialScrollOffset';
  static const keepScrollOffset = 'keepScrollOffset';
  static const key = 'key';  
}
