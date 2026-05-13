import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminWebp from 'imagemin-webp';

const optimize = async () => {
  console.log('🖼️  Optimizing images...');

  // Optimize to JPEG
  await imagemin(['src/assets/images/**/*.{jpg,png}'], {
    destination: 'src/assets/images-optimized',
    plugins: [imageminMozjpeg({ quality: 80 })],
  });

  // Generate WebP versions
  await imagemin(['src/assets/images/**/*.{jpg,png}'], {
    destination: 'src/assets/images-optimized',
    plugins: [imageminWebp({ quality: 80 })],
  });

  console.log('✅ Images optimized! Check src/assets/images-optimized/');
};

optimize().catch((err) => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});
