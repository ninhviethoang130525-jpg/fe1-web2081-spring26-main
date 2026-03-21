# Bài 1, 2, 3: Forms với Validation

## Bài 1: Form Thêm Product

### Vị trí: `src/app/pages/products/`

### Files tạo/cập nhật:
- `products.ts` - Component TypeScript với form và validation
- `products.html` - Template HTML để hiển thị form
- `products.css` - Styling cho form

### Validation Rules:
- **name**: Bắt buộc (required)
- **price**: Bắt buộc, phải > 0 (min: 0.01)
- **category**: Bắt buộc (required)

### Getters sử dụng:
```typescript
get name() {
  return this.addProductForm.get('name');
}

get price() {
  return this.addProductForm.get('price');
}

get category() {
  return this.addProductForm.get('category');
}
```

### Hiển thị lỗi validation:
```html
<div *ngIf="name?.invalid && name?.touched" style="color: red;">
  <p *ngIf="name?.errors?.['required']">Tên sản phẩm là bắt buộc</p>
</div>
```

---

## Bài 2: Form Đăng ký Tài khoản

### Vị trí: `src/app/pages/register/`

### Files tạo:
- `register.ts` - Component TypeScript với form và validation
- `register.html` - Template HTML để hiển thị form
- `register.css` - Styling cho form

### Validation Rules:
- **username**: Bắt buộc (required)
- **email**: Bắt buộc (required), phải là email hợp lệ
- **password**: Bắt buộc (required), tối thiểu 6 ký tự (minLength: 6)

### Getters sử dụng:
```typescript
get username() {
  return this.registerForm.get('username');
}

get email() {
  return this.registerForm.get('email');
}

get password() {
  return this.registerForm.get('password');
}
```

### Hiển thị lỗi validation:
```html
<div *ngIf="email?.invalid && email?.touched" style="color: red;">
  <p *ngIf="email?.errors?.['required']">Email là bắt buộc</p>
  <p *ngIf="email?.errors?.['email']">Email không hợp lệ</p>
</div>
```

---

## Bài 3 (Nâng cao): Hiển thị Lỗi Validation Sử dụng Getters

### Kỹ thuật:
1. **Getters**: Dùng để truy cập các form control từ template
2. **Valid State**: Kiểm tra `?.invalid` và `?.touched`
3. **Error Types**: Truy cập các error bằng `?.errors?.['errorType']`

### Ưu điểm của cách này:
- Code template sạch hơn
- Dễ bảo trì và mở rộng
- Có thể tái sử dụng logic validation

### Cách sử dụng:
```typescript
// Component TypeScript
get email() {
  return this.registerForm.get('email');
}

// Template HTML
<div *ngIf="email?.invalid && email?.touched" style="color: red;">
  <p *ngIf="email?.errors?.['required']">Email là bắt buộc</p>
  <p *ngIf="email?.errors?.['email']">Email không hợp lệ</p>
</div>
```

---

## Cách sử dụng:

### 1. Form Product:
- Truy cập: `http://localhost:4200/products`
- Nhập name, price, category
- System sẽ validate khi blur hoặc submit

### 2. Form Đăng ký:
- Truy cập: `http://localhost:4200/register`
- Nhập username, email, password
- System sẽ validate khi blur hoặc submit

### 3. Button Submit:
- Bị disable khi form không valid
- Enable khi tất cả validation pass

---

## Key Features:

✅ Reactive Forms (FormBuilder, FormGroup, Validators)
✅ Custom Validation Rules
✅ Dynamic Error Messages
✅ Getters để truy cập form controls
✅ Disabled button khi form invalid
✅ Touch state tracking
✅ Email validation
✅ MinLength validation
✅ Min value validation (price > 0)

---

## Routes Updated:
- Added `/register` route vào `app.routes.ts`
- Import Register component từ `./pages/register/register`

---

## Next Steps:
- Kết nối API để submit form data
- Thêm custom validation (e.g., check username exists)
- Thêm success/error messages
- Implement form reset logic
