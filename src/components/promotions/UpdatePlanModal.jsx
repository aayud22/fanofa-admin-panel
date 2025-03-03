import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../../components/ui/dialog';
import { Button } from '../../components/ui/button';

export default function UpdatePlanModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-midnightBlue">
            Update Plan
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          {/* Editor placeholder image */}
          <div className="h-full rounded-lg bg-cloudWhite">
            <img
              src="https://s3-alpha-sig.figma.com/img/9ac1/cf50/345a2d52c4c1be531089b6fedd60d897?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=G4JyULeGRyRu~tBovoBFlKrQu11tIsgxsx0I8XvF0djgP-dZTspvc2VPf9dJyHNzUOwODUYv0fzsQ307cxQ5JfhV7tho6Mqj-kfRMX~j38RACFlKAjUpfIi-4wjrn-JuhgrowvRIMghCCJDLtbD9sf7BJ0e3PEseOr6kcf3K6-bHBFS9jKQeFSf1yyHU6RHPeDLdZ2cW-3eBvD6HzSkAZsSUVuNzjCBODyKi8CRDySwNOr0WNHevpfB6erj~uY7I8p9JeTMvRwTCdb8T2ndOj7V2qdt3Bgmdy7ViSuyrFEYPnGo~gS-7h1FLoiIYqn8CHMOAhiFbfaQtJY7cmAwlMw__"
              alt="Editor Placeholder"
              className="rounded-lg h-[350px] w-full bg-no-repeat bg-center bg-cover"
            />
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-3">
            <Button 
              className="w-full bg-primary-gradient text-white font-medium hover:opacity-90 transition-opacity"
              onClick={onClose}
            >
              Update Plan
            </Button>
            <Button 
              variant="outline" 
              onClick={onClose}
              className="w-full text-steelBlue"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
