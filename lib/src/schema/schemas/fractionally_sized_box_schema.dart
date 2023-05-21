import 'package:json_theme/json_theme_schemas.dart';

class FractionallySizedBoxSchema {
  static const id =
      'https://peiffer-innovations.github.io/flutter_json_schemas/schemas/json_dynamic_widget/fractionally_sized_box.json';

  static final schema = {
    r'$schema': 'http://json-schema.org/draft-06/schema#',
    r'$id': id,
    r'$children': 1,
    r'$comment': 'https://api.flutter.dev/flutter/widgets/FractionallySizedBox-class.html',
    'type': 'object',
    'title': 'FractionallySizedBox',
    'additionalProperties': false,
    'properties': {
      FractionallySizedBoxSchemaProperty.alignment: SchemaHelper.objectSchema(AlignmentSchema.id),
      FractionallySizedBoxSchemaProperty.heightFactor: SchemaHelper.numberSchema,
      FractionallySizedBoxSchemaProperty.widthFactor: SchemaHelper.numberSchema,
    }
  };
}

class FractionallySizedBoxSchemaProperty {
  static const alignment = 'alignment';
  static const heightFactor = 'heightFactor';
  static const widthFactor = 'widthFactor';
}
