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
        <button className="w-full text-start h-full focus:outline-0">
          Search
        </button>
      </div>

      <Modal
        title={
          <div
            className="modal-draggable-title flex bg-purple-50 py-50.5 px-1 rounded-2xl"
            style={{ width: "100%", cursor: "move" }}
            onFocus={() => {}}
            onBlur={() => {}}
          ></div> //text
        }
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        closable={false}
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
                <div className="" style={{ padding: "16px" }}>
                  <div className="flex w-full gap-3 items-center">
                    {/* Search Input */}
                    <div className="flex-1 relative">
                      <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search products, stores..."
                        className="w-full py-2.5 pl-4 pr-12 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-50 focus:border-purple-100 transition"
                      />
                      <IoIosSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    </div>

                    {/* Close Button */}
                    <button
                      onClick={handleCancel}
                      className="flex items-center text-[25px] justify-center w-10 h-10 rounded-full bg-purple-50 text-purple-700 hover:bg-purple-100 hover:text-purple-900 shadow-sm transition-all duration-300 active:scale-95"
                    >
                      ×
                    </button>
                  </div>

                  <div className="h-[50vh] size-full flex mt-10">
                    {element.props.children}
                  </div>
                </div>
              </div>
            </Draggable>
          );
        }}
      >
        <div className="size-10 h-full w-360 gap-5 border-gray-400 flex">
          <div className="size-101 w-140 p-5 flex flex-col gap-5 bg-white">
            <p className="text-2xl font-light font-sans italic text-black/25">
              Recent popular search...
            </p>
            <ul className="text-[18px] font-normal text-gray-700">
              <li>Store N21</li>
              <li>iPhone 16 Pro Max</li>
              <li>Smart Watch</li>
            </ul>
          </div>
          <div className="grid gap-6 w-full p-5 grid-cols-4">
            {Array(4)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                >
                  {/* Main Image */}
                  <div className="w-full h-[270px] overflow-hidden rounded-t-lg">
                    <img
                      src={`https://picsum.photos/300/300?random=${idx}`}
                      alt={`Product ${idx + 1}`}
                      className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-2 flex flex-col items-start w-full">
                    <p className="font-sans text-[20px] font-light text-gray-800 line-clamp-1">
                      Product Name {idx + 1}
                    </p>

                    <strong className="text-[20px] font-bold text-black mt-1">
                      $1222
                    </strong>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default memo(SearchButton);
