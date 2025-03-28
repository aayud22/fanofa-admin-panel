import { useState, useEffect } from 'react';
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from '../../components/ui/select';
import {
  Dialog,
  DialogTitle,
  DialogFooter,
  DialogHeader,
  DialogContent,
} from '../../components/ui/dialog';
import ReactQuill from 'react-quill';
import { Input } from '../../components/ui/input';
import { Switch } from '../../components/ui/switch';
import { Button } from '../../components/ui/button';
import { X, Image as ImageIcon, Star } from 'lucide-react';

export default function EditReviewModal({ isOpen, onClose, reviewData }) {
  const [stars, setStars] = useState('');
  const [feedback, setFeedback] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [viewOnPage, setViewOnPage] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);

  useEffect(() => {
    if (reviewData) {
      setFeedback(reviewData.feedback || '');
      setStars(reviewData.stars?.toString() || '');
      setViewOnPage(reviewData.viewOnPage || false);
      setUploadedImages(reviewData.images || []);
      setCustomerId(reviewData.customerId || '');
    }
  }, [reviewData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedReview = {
      feedback,
      stars: parseInt(stars),
      viewOnPage,
      images: uploadedImages,
      customerId,
    };
    console.log('Updated review:', updatedReview);
    onClose();
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files?.map((file) => URL.createObjectURL(file));
    setUploadedImages((prev) => [...prev, ...newImages]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        showClose
        className="max-h-[90vh] max-w-2xl overflow-y-auto"
      >
        <DialogHeader>
          <DialogTitle>Edit Review</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">
              Customer ID
            </label>
            <Input
              type="text"
              value={customerId}
              className="w-full bg-gray-100"
              onChange={(e) => setCustomerId(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-1 flex items-center justify-between text-sm font-medium">
              <span>View Review on Page</span>
              <Switch checked={viewOnPage} onCheckedChange={setViewOnPage} />
            </label>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Stars</label>
            <Select value={stars} onValueChange={setStars}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select rating" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <SelectItem key={rating} value={rating.toString()}>
                    <div className="flex items-center gap-0.5">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />{' '}
                      <span className="">{rating}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="min-h-[200px]">
            <label className="mb-1 block text-sm font-medium">Feedback</label>
            <ReactQuill
              theme="snow"
              value={feedback}
              onChange={setFeedback}
              className="h-[150px]"
            />
          </div>

          <div className="pt-4">
            <label className="mb-1 block text-sm font-medium">
              Uploaded Images
            </label>
            <div className="flex flex-wrap gap-2">
              {uploadedImages.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    src={img}
                    alt={`Review ${index + 1}`}
                    className="h-24 w-24 rounded object-cover"
                  />
                  <Button
                    type="button"
                    onClick={() =>
                      setUploadedImages(
                        uploadedImages.filter((_, i) => i !== index)
                      )
                    }
                    className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
              <label className="flex h-24 w-24 cursor-pointer items-center justify-center rounded border-2 border-dashed hover:bg-gray-50">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <ImageIcon className="h-6 w-6 text-gray-400" />
              </label>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Update</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
