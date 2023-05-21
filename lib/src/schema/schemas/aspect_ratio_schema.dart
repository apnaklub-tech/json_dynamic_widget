import 'package:json_theme/json_theme_schemas.dart';

class AspectRatioSchema {
  static const id =
      'https://peiffer-innovations.github.io/flutter_json_schemas/schemas/json_dynamic_widget/aspect_ratio.json';

  static final schema = {
    r'$schema': 'http://json-schema.org/draft-06/schema#',
    r'$id': id,
    r'$children': 1,
    r'$comment':
        'https://api.flutter.dev/flutter/widgets/AspectRatio-class.html',
    'type': 'object',
    'title': 'AspectRatio',
    'additionalProperties': false,
    'required': [
      'aspectRatio',
    ],
    'properties': {
      AspectRatioSchemaProperty.aspectRatio: SchemaHelper.numberSchema,
    }
  };
}

class AspectRatioSchemaProperty {
  static const aspectRatio = 'aspectRatio';
}