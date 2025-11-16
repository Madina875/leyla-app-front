"use client";

import React, { memo, useEffect, useRef, useState } from "react";
import { Modal } from "antd";
import type { DraggableData, DraggableEvent } from "react-draggable";
import Draggable from "react-draggable";
import { IoIosSearch } from "react-icons/io";

const SearchButton = () => {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const draggleRef = useRef<HTMLDivElement>(null!);
  const inputRef = useRef<HTMLInputElement>(null!);

  const showModal = () => setOpen(true);
  const handleOk = () => setOpen(false);
  const handleCancel = () => setOpen(false);

  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) return;

    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  return (
    <>
      <div
        onClick={showModal}
        className="flex items-center border gap-2 px-3 py-1 rounded-full w-42 cursor-pointer"
      >
        <IoIosSearch className="size-4.5" />
        <input
          type="text"
          placeholder="Search"
          className="w-full text-start h-ful"
        />
      </div>

      <Modal
        title={
          <div
            className="modal-draggable-title"
            style={{ width: "100%", padding: "12px", cursor: "move" }}
            onFocus={() => {}}
            onBlur={() => {}}
          >
            search items
          </div> //text
        }
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        maskClosable={false}
        transitionName=""
        maskTransitionName=""
        modalRender={(modal) => {
          if (!React.isValidElement(modal)) return null;

          const element = modal as React.ReactElement<{
            title?: React.ReactNode;
            children?: React.ReactNode;
          }>;

          return (
            <Draggable
              disabled={disabled}
              bounds={bounds}
              handle=".modal-draggable-title"
              nodeRef={draggleRef}
              onStart={onStart}
            >
              <div
                ref={draggleRef}
                onClick={(e) => e.stopPropagation()}
                onMouseLeave={handleCancel}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "70vh",
                  zIndex: 1000,
                  background: "white",
                  overflow: "auto",
                  padding: "0",
                  pointerEvents: "auto",
                }}
                onMouseDown={() => setDisabled(true)}
                onMouseUp={() => setDisabled(false)}
              >
                {element.props.title && (
                  <div
                    style={{
                      padding: "12px 16px",
                      cursor: "move",
                      borderBottom: "1px solid #eee",
                      fontWeight: "bold",
                    }}
                  >
                    {element.props.title}
                  </div>
                )}
                <div style={{ padding: "16px" }}>
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search inside modal..."
                    className="w-full border px-3 py-2 rounded"
                  />
                  {element.props.children}
                </div>
              </div>
            </Draggable>
          );
        }}
      >
        {/* <p>
          Just don&apos;t learn physics at school and your life will be full of
          magic and miracles.
        </p>
        <p>
          Day before yesterday I saw a rabbit, and yesterday a deer, and today,
          you.
        </p> */}
      </Modal>
    </>
  );
};

export default memo(SearchButton);
