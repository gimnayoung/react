import React, { useState, useEffect } from "react";
// import { Form, Modal, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CloudinaryUploadWidget from "../utils/CloudinaryUploadWidget";
import { productActions } from "../action/productAction";
import { CATEGORY, STATUS, SIZE } from "../constants/product.constants";
// import "../style/adminProduct.style.css";
import * as types from "../constants/product.constants";
import { commonUiActions } from "../action/commonUiAction";

const InitialFormData = {
  name: "",
  sku: "",
  stock: {},
  image: "",
  description: "",
  category: [],
  status: "active",
  price: 0,
};
const NewItemDialog = ({ mode, showDialog, setShowDialog }) => {
  const { selectedProduct } = useSelector((state) => state.product);
  const { error } = useSelector((state) => state.product || {});
  const [formData, setFormData] = useState(
    mode === "new" ? { ...InitialFormData } : selectedProduct
  );
  const [stock, setStock] = useState([]);
  const dispatch = useDispatch();
  const [stockError, setStockError] = useState(false);
  const handleClose = () => {
    setShowDialog(false);
    setFormData({ ...InitialFormData });
    setStock([]);
    setStockError(false);
    //모든걸 초기화시키고;
    // 다이얼로그 닫아주기
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //재고를 입력했는지 확인, 아니면 에러
    if (stock.length === 0) {
      return setStockError(true);
    }
    setStockError(false);
    // 재고를 배열에서 객체로 바꿔주기
    const totalStock = stock.reduce((total, item) => {
      return { ...total, [item[0]]: parseInt(item[1]) }
    }, {})
    console.log('formData', totalStock);
    // [['M',2]] 에서 {M:2}로
    if (mode === "new") {
      //새 상품 만들기
      dispatch(productActions.createProduct({ ...formData, stock: totalStock }));
      setShowDialog(false);
    } else {
      // 상품 수정하기
      dispatch(productActions.editProduct({ ...formData, stock: totalStock }, selectedProduct._id));
      // setShowDialog(false); ??
    }
  };

  const handleChange = (event) => {
    //form에 데이터 넣어주기
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };
  console.log(formData)
  const addStock = () => {
    //재고타입 추가시 배열에 새 배열 추가
    setStock([...stock, []]);
  };

  const deleteStock = (idx) => {
    //재고 삭제하기
    const newStock = stock.filter((item, index) => index !== idx)
    setStock(newStock);
  };

  const handleSizeChange = (value, index) => {
    //  재고 사이즈 변환하기
    const newStock = [...stock];
    newStock[index][0] = value;
    setStock(newStock);
  };

  const handleStockChange = (value, index) => {
    //재고 수량 변환하기
    const newStock = [...stock];
    newStock[index][1] = value > 0 ? value : 0;
    setStock(newStock);
  };
  console.log('stock', stock);
  const onHandleCategory = (event) => {
    if (formData.category.includes(event.target.value)) {
      const newCategory = formData.category.filter(
        (item) => item !== event.target.value
      );
      setFormData({
        ...formData,
        category: [...newCategory],
      });
    } else {
      //아니면 새로추가
      setFormData({
        ...formData,
        category: [...formData.category, event.target.value],
      });
    }
  };

  const uploadImage = (url) => {
    //이미지 업로드
    setFormData({ ...formData, image: url })
  };

  useEffect(() => {
    if (showDialog) {
      if (mode === "edit") {
        // 선택된 데이터값 불러오기 (재고 형태 객체에서 어레이로 바꾸기)
        setFormData(selectedProduct);
        // console.log("se",formData);
        const StockArray = Object.keys(selectedProduct.stock).map((size) => [size, selectedProduct.stock[size]]);
        setStock(StockArray);
      } else {
        // 초기화된 값 불러오기
        setFormData({ ...InitialFormData });
        setStock([]);
      }
    }
  }, [showDialog]);

  //에러나면 토스트 메세지 보여주기

  return (
    <div className={`modal ${showDialog ? "show" : ""}`} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="sku" className="form-label">
                  Sku
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="sku"
                  name="sku"
                  value={formData.sku}
                  onChange={handleChange}
                  placeholder="Enter Sku"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description"
                  rows={3}
                  required
                ></textarea>
              </div>
              {/* 재고 */}
              <div className="mb-3">
                <label className="form-label mr-1">Stock</label>
                {stockError && (
                  <span className="error-message">Please add stock</span>
                )}
                <button
                  type="button"
                  className="btn btn-sm btn-primary"
                  onClick={addStock}
                >
                  Add +
                </button>
                <div className="mt-2">
                  {stock.map((item, index) => (
                    <div className="row mb-2" key={index}>
                      <div className="col-4">
                        <select
                          className="form-select"
                          value={item[0]}
                          onChange={(e) => handleSizeChange(e.target.value, index)}
                          required
                        >
                          <option value="" disabled hidden>
                            Please Choose...
                          </option>
                          {SIZE.map((size, idx) => (
                            <option key={idx} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-5">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Number of stock"
                          value={item[1]}
                          onChange={(e) => handleStockChange(e.target.value, index)}
                          required
                        />
                      </div>
                      <div className="col-3">
                        <button
                          type="button"
                          className="btn btn-sm btn-danger"
                          onClick={() => deleteStock(index)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  Image
                </label>
                <CloudinaryUploadWidget uploadImage={uploadImage} />
                <img
                  id="uploadedimage"
                  src={formData.image}
                  className="upload-image mt-2"
                  alt="uploadedimage"
                />
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="0"
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <select
                    className="form-select"
                    id="category"
                    name="category"
                    multiple
                    value={formData.category}
                    onChange={onHandleCategory}
                    required
                  >
                    {CATEGORY.map((item, idx) => (
                      <option key={idx} value={item.toLowerCase()}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="status" className="form-label">
                    Status
                  </label>
                  <select
                    className="form-select"
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                  >
                    {STATUS.map((item, idx) => (
                      <option key={idx} value={item.toLowerCase()}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleClose}>
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                {mode === "new" ? "Submit" : "Edit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewItemDialog;