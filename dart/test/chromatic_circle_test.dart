import 'package:test/test.dart';
import '../lib/chromatic_circle.dart';

void main() {
  group('ChromaticCircle', () {
    test('mixColors returns correct colors with blue filter', () {
      final circle = ChromaticCircle(Color.blue);
      
      expect(circle.mixColors(Color.blue), Color.blue);
      expect(circle.mixColors(Color.yellow), Color.green);
      expect(circle.mixColors(Color.red), Color.violet);
      
      expect(() => circle.mixColors(Color.green),
          throwsA(isA<ArgumentError>()));
    });

    test('mixColors returns correct colors with red filter', () {
      final circle = ChromaticCircle(Color.red);
      
      expect(circle.mixColors(Color.red), Color.red);
      expect(circle.mixColors(Color.yellow), Color.orange);
      expect(circle.mixColors(Color.blue), Color.violet);
      
      expect(() => circle.mixColors(Color.green),
          throwsA(isA<ArgumentError>()));
    });

    test('mixColors returns correct colors with yellow filter', () {
      final circle = ChromaticCircle(Color.yellow);
      
      expect(circle.mixColors(Color.yellow), Color.yellow);
      expect(circle.mixColors(Color.red), Color.orange);
      expect(circle.mixColors(Color.blue), Color.green);
      
      expect(() => circle.mixColors(Color.violet),
          throwsA(isA<ArgumentError>()));
    });

    test('mixColors returns same color when filter matches input', () {
      final circle = ChromaticCircle(Color.green);
      
      expect(circle.mixColors(Color.green), Color.green);
    });
  });
}
