import 'package:flutter_test/flutter_test.dart';
import 'package:circulo_cromatico/chromatic_circle.dart';

void main() {
  group('ChromaticCircle', () {
    test('mixColors returns correct colors with blue filter', () {
      final circle = ChromaticCircle(filter: Colors.blue);
      
      expect(circle.mixColors(Colors.blue), Colors.blue);
      expect(circle.mixColors(Colors.yellow), Colors.green);
      expect(circle.mixColors(Colors.red), Colors.purple);
      
      expect(() => circle.mixColors(Colors.green),
          throwsA(isA<ArgumentError>()));
    });

    test('mixColors returns correct colors with red filter', () {
      final circle = ChromaticCircle(filter: Colors.red);
      
      expect(circle.mixColors(Colors.red), Colors.red);
      expect(circle.mixColors(Colors.yellow), Colors.orange);
      expect(circle.mixColors(Colors.blue), Colors.purple);
      
      expect(() => circle.mixColors(Colors.green),
          throwsA(isA<ArgumentError>()));
    });

    test('mixColors returns correct colors with yellow filter', () {
      final circle = ChromaticCircle(filter: Colors.yellow);
      
      expect(circle.mixColors(Colors.yellow), Colors.yellow);
      expect(circle.mixColors(Colors.red), Colors.orange);
      expect(circle.mixColors(Colors.blue), Colors.green);
      
      expect(() => circle.mixColors(Colors.purple),
          throwsA(isA<ArgumentError>()));
    });

    test('mixColors returns same color when filter matches input', () {
      final circle = ChromaticCircle(filter: Colors.green);
      
      expect(circle.mixColors(Colors.green), Colors.green);
    });
  });
}
