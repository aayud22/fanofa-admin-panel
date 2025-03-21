import React, { useState, useRef } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Textarea } from '../ui/textarea';
import { Pencil, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import EditFieldModal from './Modals/EditFieldModal';
import DeleteFieldModal from './Modals/DeleteFieldModal';

const SupportForm = () => {
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  // For creating new Category/Question
  const [newCategory, setNewCategory] = useState({ title: '' });
  const [newQuestion, setNewQuestion] = useState({ text: '', answer: '' });

  // Refs for focusing inputs
  const titleRefs = useRef({});
  const questionCountRefs = useRef({});

  // Existing categories (no `questions` field; we compute question count dynamically)
  const [categories, setCategories] = useState([
    {
      id: '1',
      title: 'Orders',
      enabled: true,
      expanded: true,
      editTitle: false,
    },
    {
      id: '2',
      title: 'Posting Ads',
      enabled: true,
      expanded: true,
      editTitle: false,
    },
    {
      id: '3',
      title: 'Jobs',
      enabled: true,
      expanded: true,
      editTitle: false,
    },
  ]);

  // Existing questions
  const [questions, setQuestions] = useState([
    {
      id: 'q1',
      categoryId: '1',
      text: 'My Account showed as banned or suspended',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      enabled: true,
    },
    {
      id: 'q2',
      categoryId: '1',
      text: 'My Account showed as banned or suspended',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      enabled: true,
    },
    {
      id: 'q3',
      categoryId: '1',
      text: 'My Account showed as banned or suspended',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      enabled: true,
    },
    {
      id: 'q4',
      categoryId: '1',
      text: 'My Account showed as banned or suspended',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      enabled: true,
    },
    {
      id: 'q5',
      categoryId: '1',
      text: 'My Account showed as banned or suspended',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      enabled: true,
    },
    {
      id: 'q6',
      categoryId: '1',
      text: 'My Account showed as banned or suspended',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      enabled: true,
    },
    {
      id: 'q7',
      categoryId: '1',
      text: 'My Account showed as banned or suspended',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      enabled: true,
    },
    {
      id: 'q8',
      categoryId: '1',
      text: 'My Account showed as banned or suspended',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      enabled: true,
    },
  ]);

  // Modal states
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [editingQuestion, setEditingQuestion] = useState(false);

  // For each category, ensure we have a ref object for focusing:
  categories?.forEach((cat) => {
    if (!titleRefs.current[cat.id]) {
      titleRefs.current[cat.id] = React.createRef();
    }
    if (!questionCountRefs.current[cat.id]) {
      questionCountRefs.current[cat.id] = React.createRef();
    }
  });

  // Toggle category enable/disable
  const toggleCategoryEnabled = (id) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === id ? { ...cat, enabled: !cat.enabled } : cat
      )
    );
  };

  // Toggle question enable/disable
  const toggleQuestionEnabled = (id) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, enabled: !q.enabled } : q))
    );
  };

  // Delete category (and associated questions)
  const deleteCategory = (id) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== id));
    setQuestions((prev) => prev.filter((q) => q.categoryId !== id));
  };

  // Delete question
  const deleteQuestion = (id) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  // Expand/Collapse
  const toggleCategoryExpand = (id) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === id ? { ...cat, expanded: !cat.expanded } : cat
      )
    );
  };

  // Update category title
  const handleCategoryTitleChange = (id, value) => {
    setCategories((prev) =>
      prev.map((cat) => (cat.id === id ? { ...cat, title: value } : cat))
    );
  };

  // Add new category
  const handleAddCategory = () => {
    if (newCategory.title) {
      const newId = Math.random().toString(36).substr(2, 9);
      setCategories((prev) => [
        ...prev,
        {
          id: newId,
          title: newCategory.title,
          enabled: true,
          expanded: true,
          editTitle: false,
        },
      ]);
      setNewCategory({ title: '' });
      setShowAddCategory(false);
    }
  };

  // Add new question
  const handleAddQuestion = () => {
    if (newQuestion.text && selectedCategoryId) {
      const newId = Math.random().toString(36).substr(2, 9);
      setQuestions((prev) => [
        ...prev,
        {
          id: newId,
          categoryId: selectedCategoryId,
          text: newQuestion.text,
          answer: newQuestion.answer,
          enabled: true,
        },
      ]);
      setNewQuestion({ text: '', answer: '' });
      setShowAddQuestion(false);
    }
  };

  const openEditCategoryModal = (category) => {
    setCurrentCategory(category);
    setEditingQuestion(false);
    setEditModalOpen(true);
  };

  const openDeleteCategoryModal = (category) => {
    setCurrentCategory(category);
    setEditingQuestion(false);
    setDeleteModalOpen(true);
  };

  const openEditQuestionModal = (question) => {
    setCurrentQuestion(question);
    setEditingQuestion(true);
    setEditModalOpen(true);
  };

  const openDeleteQuestionModal = (question) => {
    setCurrentQuestion(question);
    setEditingQuestion(true);
    setDeleteModalOpen(true);
  };

  const handleUpdateCategory = (updatedCategory) => {
    setCategories(
      categories.map((cat) =>
        cat.id === updatedCategory.id
          ? { ...cat, title: updatedCategory.label }
          : cat
      )
    );
  };

  const handleUpdateQuestion = (updatedQuestion) => {
    setQuestions(
      questions.map((q) =>
        q.id === updatedQuestion.id
          ? {
              ...q,
              text: updatedQuestion.label,
              answer: updatedQuestion.placeholder,
            }
          : q
      )
    );
  };

  return (
    <div className="py-6">
      <h2 className="mb-6 text-xl font-semibold text-deepIndigo">
        Manage Support Form
      </h2>

      <div className="mb-8">
        <h3 className="mb-4 text-lg font-medium text-deepIndigo">
          Listed Category
        </h3>

        {/* Header row */}
        <div className="mb-2 flex items-center justify-between px-4 text-sm font-medium text-muted-foreground">
          <span className="text-sm font-normal text-deepIndigo">
            Category Title
          </span>
          <span className="text-sm font-normal text-deepIndigo">
            No. of Questions
          </span>
        </div>

        {/* Each category */}
        {categories.map((category) => {
          // Calculate real question count from the questions array
          const realCount = questions.filter(
            (q) => q.categoryId === category.id
          ).length;

          return (
            <div
              key={category.id}
              className="mb-6 rounded-lg border border-gray-200 bg-white p-4"
            >
              <div className="col-span-2 mb-3 grid grid-cols-2 gap-3">
                {/* Left column: Category Title */}
                <div className="flex items-center gap-2 rounded-md border p-2">
                  <Input
                    type="text"
                    value={category.title}
                    readOnly={!category.editTitle}
                    ref={titleRefs.current[category.id]}
                    placeholder="Category"
                    className="flex-1 !border-none !outline-none focus-visible:outline-none focus-visible:ring-0"
                    onChange={(e) =>
                      handleCategoryTitleChange(category.id, e.target.value)
                    }
                  />
                  <div className="flex items-center gap-2">
                    {/* Pencil toggles edit mode for title, then focuses */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9"
                      onClick={() => openEditCategoryModal(category)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>

                    {/* Trash icon: delete category */}
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-9 w-9"
                      onClick={() => openDeleteCategoryModal(category)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>

                    {/* Enable/Disable switch */}
                    <Switch
                      checked={category.enabled}
                      onCheckedChange={() => toggleCategoryEnabled(category.id)}
                    />
                  </div>
                </div>

                {/* Right column: Real question count + Chevron */}
                <div className="flex items-center gap-2 rounded-md border p-2">
                  {/* Show the real question count in a read-only input */}
                  <Input
                    type="number"
                    readOnly
                    value={realCount}
                    ref={questionCountRefs.current[category.id]}
                    className="flex-1 !border-none !outline-none focus-visible:outline-none focus-visible:ring-0"
                  />
                  <div className="flex items-center gap-2">
                    {/* Pencil icon can focus the question-count input if you want */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9"
                      onClick={() => openEditCategoryModal(category)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>

                    {/* Delete icon (optional) or remove if you don't need it here */}
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-9 w-9"
                      onClick={() => openDeleteCategoryModal(category)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>

                    {/* Enable/Disable switch (optional) */}
                    <Switch
                      checked={category.enabled}
                      onCheckedChange={() => toggleCategoryEnabled(category.id)}
                    />

                    {/* Chevron at the end for expand/collapse */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9"
                      onClick={() => toggleCategoryExpand(category.id)}
                    >
                      {category.expanded ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Only show questions if expanded */}
              {category?.expanded && (
                <>
                  {questions
                    ?.filter((q) => q.categoryId === category.id)
                    ?.map((question) => (
                      <div
                        key={question.id}
                        className="mb-2 flex items-start justify-between border-b pb-2 last:border-none"
                      >
                        {/* Question text & answer */}
                        <div className="pr-4">
                          <div className="text-base font-semibold text-deepIndigo">
                            {question.text}
                          </div>
                          <div className="text-base font-normal text-deepIndigo">
                            {question.answer}
                          </div>
                        </div>

                        {/* Icons & Switch */}
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-9 w-9"
                            onClick={() => openEditQuestionModal(question)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-9 w-9"
                            onClick={() => openDeleteQuestionModal(question)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <Switch
                            checked={question.enabled}
                            onCheckedChange={() =>
                              toggleQuestionEnabled(question.id)
                            }
                          />
                        </div>
                      </div>
                    ))}

                  {/* Button to add more questions */}
                  <Button
                    className="mt-3 w-fit bg-primary-gradient"
                    onClick={() => {
                      setSelectedCategoryId(category.id);
                      setShowAddQuestion(true);
                    }}
                  >
                    Add More Question
                  </Button>
                </>
              )}
            </div>
          );
        })}

        {/* Add Category Form */}
        {showAddCategory ? (
          <div className="mt-4 grid gap-4 rounded-lg border bg-background p-4">
            <div>
              <Label>Category Title</Label>
              <Input
                placeholder="Enter category title"
                value={newCategory.title}
                onChange={(e) =>
                  setNewCategory({ ...newCategory, title: e.target.value })
                }
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                onClick={() => setShowAddCategory(false)}
                className="bg-gray-100 hover:bg-gray-200"
              >
                Cancel
              </Button>
              <Button
                onClick={handleAddCategory}
                className="bg-primary-gradient"
              >
                Save
              </Button>
            </div>
          </div>
        ) : (
          <Button
            className="mt-4 w-fit bg-primary-gradient"
            onClick={() => setShowAddCategory(true)}
          >
            Add More Category
          </Button>
        )}
      </div>

      {/* Add Question Form */}
      {showAddQuestion && (
        <div className="mt-4 grid gap-4 rounded-lg border bg-background p-4">
          <div className="space-y-4">
            <div>
              <Label>Question</Label>
              <Input
                value={newQuestion.text}
                placeholder="Enter question"
                onChange={(e) =>
                  setNewQuestion({ ...newQuestion, text: e.target.value })
                }
              />
            </div>
            <div>
              <Label>Answer</Label>
              <Textarea
                placeholder="Enter answer"
                value={newQuestion.answer}
                onChange={(e) =>
                  setNewQuestion({ ...newQuestion, answer: e.target.value })
                }
                className="min-h-[100px]"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              onClick={() => setShowAddQuestion(false)}
              className="bg-gray-100 hover:bg-gray-200"
            >
              Cancel
            </Button>
            <Button onClick={handleAddQuestion} className="bg-primary-gradient">
              Save
            </Button>
          </div>
        </div>
      )}

      {/* Edit Field Modal for Categories */}
      {currentCategory && !editingQuestion && (
        <EditFieldModal
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          onUpdate={handleUpdateCategory}
          field={{
            id: currentCategory.id,
            label: currentCategory.title,
            placeholder: '',
            type: 'text',
          }}
        />
      )}

      {/* Delete Field Modal for Categories */}
      {currentCategory && !editingQuestion && (
        <DeleteFieldModal
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onDelete={() => deleteCategory(currentCategory.id)}
          fieldName={currentCategory.title}
        />
      )}

      {/* Edit Field Modal for Questions */}
      {currentQuestion && editingQuestion && (
        <EditFieldModal
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          onUpdate={handleUpdateQuestion}
          field={{
            id: currentQuestion.id,
            label: currentQuestion.text,
            placeholder: currentQuestion.answer,
            type: 'text',
          }}
        />
      )}

      {/* Delete Field Modal for Questions */}
      {currentQuestion && editingQuestion && (
        <DeleteFieldModal
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onDelete={() => deleteQuestion(currentQuestion.id)}
          fieldName={currentQuestion.text}
        />
      )}
    </div>
  );
};

export default SupportForm;
