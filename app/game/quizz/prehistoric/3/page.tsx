'use client';

import React, { useState } from 'react';
import QuizzControls from '@/components/quizz/QuizzControls';
import { Input } from '@/components/ui/input';
import useLanguage from '@/lib/hooks/useLanguage';
import Image from 'next/image';
import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core';

const items = [
  { id: 'stone', label: 'Stone' },
  { id: 'bones', label: 'Animal bones' },
  { id: 'fire', label: 'Fire' },
  { id: 'caves', label: 'Caves' },
];

const targets = [
  { id: 'tool', label: 'Tool making' },
  { id: 'jewelry', label: 'Jewelry' },
  { id: 'cooking', label: 'Cooking' },
  { id: 'shelter', label: 'Shelter' },
];

const correctMatches = {
  stone: 'tool',
  bones: 'jewelry',
  fire: 'cooking',
  caves: 'shelter',
};

const Draggable: React.FC<{ id: string; label: string }> = ({ id, label }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    padding: '8px 12px',
    margin: '8px',
    backgroundColor: 'lightgreen',
    borderRadius: '8px',
    cursor: 'grab',
  };
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {label}
    </div>
  );
};

const Droppable: React.FC<{
  id: string;
  label: string;
  onDrop: (id: string) => void;
  children?: React.ReactNode;
}> = ({ id, label, children, onDrop }) => {
  const { isOver, setNodeRef } = useDroppable({ id });
  const style = {
    backgroundColor: isOver ? 'lightblue' : '#f0f0f0',
    padding: '16px',
    margin: '8px',
    minHeight: '60px',
    border: '2px dashed #ccc',
    borderRadius: '8px',
  };
  return (
    <div ref={setNodeRef} style={style}>
      <strong>{label}</strong>
      <div>{children}</div>
    </div>
  );
};

const PrehistoricQuizzQuestion2: React.FC = () => {
  const [matches, setMatches] = useState({});
  const [answer, setAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const activeLanguage = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (answer.toLowerCase() === activeLanguage.PREHISTORIC_QUIZZ_ANSWER_2) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over) {
      setMatches((prev) => ({ ...prev, [active.id]: over.id }));
    }
  };

  return (
    <div className="flex flex-col">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center mt-2"
      >
        <h2 className="text-2xl text-center bg-[#3B2F2F] p-2 rounded-md text-white font-bold">
          {activeLanguage.PREHISTORIC_QUIZZ_QUESTION_2}
        </h2>
        <DndContext onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h2 className="font-semibold mb-2">Items</h2>
              {items.map((item) => (
                <Draggable key={item.id} id={item.id} label={item.label} />
              ))}
            </div>

            <div>
              <h2 className="font-semibold mb-2">Uses</h2>
              {targets.map((target) => {
                const matchedItem = Object.entries(matches).find(
                  ([, useId]) => useId === target.id
                )?.[0];
                const matchedLabel = items.find(
                  (i) => i.id === matchedItem
                )?.label;
                return (
                  <Droppable
                    key={target.id}
                    id={target.id}
                    label={target.label}
                    onDrop={function (id: string): void {
                      throw new Error('Function not implemented.');
                    }}
                  >
                    {matchedLabel && (
                      <div className="mt-2 p-2 bg-white rounded shadow">
                        {matchedLabel}
                      </div>
                    )}
                  </Droppable>
                );
              })}
            </div>
          </div>
        </DndContext>
        {/* <Input
          value={answer}
          onChange={handleChange}
          onFocus={() => setIsCorrect(false)}
          type="text"
          placeholder={activeLanguage.QUIZZ_TYPE_YOUR_ANSWER}
          className={`mt-5 text-black placeholder:text-black border-amber-950 text-xl w-2/3 p-4`}
        />
        <QuizzControls
          answer={answer}
          isCorrect={isCorrect}
          isSubmitted={isSubmitted}
          nextPage={3}
        /> */}
      </form>
    </div>
  );
};
export default PrehistoricQuizzQuestion2;
