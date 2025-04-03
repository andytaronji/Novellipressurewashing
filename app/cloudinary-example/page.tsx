import CloudinaryUploadExample from '@/components/examples/CloudinaryUploadExample';
import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Cloudinary Example - Novelli Pressure Washing',
  description: 'Example page demonstrating Cloudinary integration',
};

export default function CloudinaryExamplePage() {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Cloudinary Integration Example</h1>
        
        <div className="max-w-2xl mx-auto">
          <CloudinaryUploadExample />
        </div>
        
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">How to Use Cloudinary</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">1. Upload Images</h3>
              <p className="text-gray-700">
                Use the <code className="bg-gray-100 px-1 rounded">useCloudinaryUpload</code> hook to upload images from the client side.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">2. Display Images</h3>
              <p className="text-gray-700">
                Use the <code className="bg-gray-100 px-1 rounded">CloudinaryImage</code> component to display optimized images.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">3. Server-Side Operations</h3>
              <p className="text-gray-700">
                Use the <code className="bg-gray-100 px-1 rounded">cloudinary</code> instance from <code className="bg-gray-100 px-1 rounded">@/lib/cloudinary</code> for server-side operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
