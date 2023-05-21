import 'package:json_theme/json_theme_schemas.dart';

class CenterSchema {
  static const id =
      'https://peiffer-innovations.github.io/flutter_json_schemas/schemas/json_dynamic_widget/center.json';

  static final schema = {
    r'$schema': 'http://json-schema.org/draft-06/schema#',
    r'$id': id,
    r'$children': 1,
    r'$comment': 'https://api.flutter.dev/flutter/widgets/Center-class.html',
    'title': 'Center',
    'oneOf': [
      {
        'type': 'null',
      },
      {
        'type': 'object',
        'additionalProperties': false,
        'properties': {
          CenterSchemaProperty.heightFactor: SchemaHelper.numberSchema,
          CenterSchemaProperty.widthFactor: SchemaHelper.numberSchema,
        },
      },
    ],
  };
}

class CenterSchemaProperty {
  static const heightFactor = 'heightFactor';
  static const widthFactor = 'widthFactor';
}
