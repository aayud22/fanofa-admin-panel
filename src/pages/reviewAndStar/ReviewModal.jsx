import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
} from '../../components/ui/dialog';
import ReactQuill from 'react-quill';
import { Star, X, ImagePlus } from 'lucide-react';
import { Button } from '../../components/ui/button';

const ReviewModal = ({ isOpen, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [reviewContent, setReviewContent] = useState('');
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleCloseDialog = () => {
    setRating(0);
    setReviewContent('');
    setHoveredRating(0);
    setSelectedImages([]);
    onClose();
  };

  const handleSubmitReview = () => {
    onSubmit({ rating, reviewContent, images: selectedImages });
    handleCloseDialog();
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      url: URL.createObjectURL(file),
      file
    }));
    setSelectedImages(prev => [...prev, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  const StarRating = () => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            className="focus:outline-none"
          >
            <Star
              className={`h-8 w-8 ${
                star <= (hoveredRating || rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseDialog}>
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col overflow-x-hidden overflow-y-auto">
        <DialogHeader className="!flex !justify-between !flex-row">
          <DialogTitle className="text-xl font-semibold">Add Review</DialogTitle>
          <button
            onClick={handleCloseDialog}
            className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>
        <div className="space-y-6 py-4 flex-1 overflow-y-auto">
          <div className="space-y-2">
            <label className="text-sm font-medium">Give Stars</label>
            <StarRating />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Write Your review</label>
            <div className="min-h-[200px]">
              <ReactQuill
                theme="snow"
                value={reviewContent}
                onChange={setReviewContent}
                className="h-[150px]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Add Product Pictures</label>
            <div className="flex items-center flex-wrap gap-5">
              {selectedImages.map((image, index) => (
                <div key={index} className="relative w-max">
                  <img
                    src={image.url}
                    alt={`Product ${index + 1}`}
                    className="h-24 w-24 rounded-lg object-cover"
                  />
                  <button
                    onClick={() => handleRemoveImage(index)}
                    className="absolute -top-2 -right-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
              {selectedImages.length < 4 && (
                <label className="flex h-24 w-24 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                    multiple={selectedImages.length < 4}
                  />
                  <ImagePlus className="h-6 w-6 text-gray-400" />
                </label>
              )}
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-end mt-4">
          <Button
            variant="outline"
            type="button"
            onClick={handleCloseDialog}
            className="mt-2"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleSubmitReview}
            className="mt-2"
            disabled={!rating || !reviewContent}
          >
            Add Review
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewModal;
