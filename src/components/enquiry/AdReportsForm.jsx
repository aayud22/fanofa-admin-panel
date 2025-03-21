import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Pencil, Trash2 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import DeleteFieldModal from './Modals/DeleteFieldModal';
import EditFieldModal from './Modals/EditFieldModal';

const AdReportsForm = () => {
  const [showAddField, setShowAddField] = useState(false);
  const [newField, setNewField] = useState('');
  const [reports, setReports] = useState([
    { id: '1', text: "I Just don't Like the Product", enabled: true },
    { id: '2', text: 'Bulling or unwanted contact', enabled: true },
    { id: '3', text: 'Suside, self-injury or eating disorders', enabled: true },
    { id: '4', text: 'Violence, hate or explotation', enabled: true },
    { id: '5', text: 'Selling or promoting restricted items', enabled: true },
    { id: '6', text: 'Nudity or sexual activity', enabled: true },
    { id: '7', text: 'Scam, fraud or spam', enabled: true },
    { id: '8', text: 'False Information', enabled: true },
    { id: '9', text: 'Fake Account', enabled: true },
  ]);

  // Modal states
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentReport, setCurrentReport] = useState(null);

  const handleToggle = (id) => {
    setReports(
      reports.map((report) =>
        report.id === id ? { ...report, enabled: !report.enabled } : report
      )
    );
  };

  const handleDelete = (id) => {
    setReports(reports.filter((report) => report.id !== id));
  };

  const handleAddField = () => {
    if (newField) {
      setReports([
        ...reports,
        {
          id: Math.random().toString(36).substr(2, 9),
          text: newField,
          enabled: true,
        },
      ]);
      setNewField('');
      setShowAddField(false);
    }
  };

  const openEditModal = (report) => {
    setCurrentReport(report);
    setEditModalOpen(true);
  };

  const openDeleteModal = (report) => {
    setCurrentReport(report);
    setDeleteModalOpen(true);
  };

  const handleUpdateReport = (updatedReport) => {
    setReports(
      reports.map((report) =>
        report.id === updatedReport.id
          ? { ...report, text: updatedReport.label }
          : report
      )
    );
  };

  return (
    <div className="py-6">
      <h2 className="mb-6 text-xl font-semibold text-deepIndigo">
        Manage Ad Reports
      </h2>
      <div className="grid gap-4">
        {reports.map((report) => (
          <Card key={report.id}>
            <CardContent className="flex items-center justify-between p-4">
              <span className="text-base font-semibold text-deepIndigo">
                {report.text}
              </span>
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-9 w-9"
                  onClick={() => openEditModal(report)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-9 w-9"
                  onClick={() => openDeleteModal(report)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Switch
                  checked={report.enabled}
                  onCheckedChange={() => handleToggle(report.id)}
                />
              </div>
            </CardContent>
          </Card>
        ))}

        {showAddField ? (
          <div className="grid gap-4 rounded-lg border bg-background p-4">
            <div>
              <Label className="text-sm font-normal text-deepIndigo">
                Report Reason
              </Label>
              <Input
                value={newField}
                placeholder="Enter report reason"
                onChange={(e) => setNewField(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                onClick={() => setShowAddField(false)}
                className="bg-gray-100 hover:bg-gray-200"
              >
                Cancel
              </Button>
              <Button onClick={handleAddField} className="bg-primary-gradient">
                Save
              </Button>
            </div>
          </div>
        ) : (
          <Button
            className="w-fit bg-primary-gradient"
            onClick={() => setShowAddField(true)}
          >
            Add More Fields
          </Button>
        )}
      </div>

      {/* Edit Field Modal */}
      {currentReport && (
        <EditFieldModal
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          onUpdate={handleUpdateReport}
          field={{
            id: currentReport.id,
            label: currentReport.text,
            placeholder: '',
            type: 'text',
          }}
        />
      )}

      {/* Delete Field Modal */}
      {currentReport && (
        <DeleteFieldModal
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onDelete={() => handleDelete(currentReport.id)}
          fieldName={currentReport.text}
        />
      )}
    </div>
  );
};

export default AdReportsForm;
