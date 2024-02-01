## Ecommerce Application multivandor

# users:
    id,
    username:,
    password,
    email,
    firstName,
    lastName,
    type:[Customer, Vendor, Admin]
    phone,
    birthday,
    isAdmin,
    pre_address
    isActive
    imgUrl,
    createdAt
    updatedAt


# Shipper
    id,
    name,
    phone,
    email,
    createdAt,
    updatedAt,
    

# products:
    id,
    name,
    price,
    color,
    brand_id,
    category_id,
    qty,
    user_id,
    description
    isActive,
    createdAt
    updatedAt

# coupon
    id
    Code
    type:(percentage, fixed amount, free shipping).
    value,
    expiry_date
    min_order_Amount
    max_uses
    usage_count
    is_single_use: Boolean
    is_active
    applicable_products
    user_id,
    created_at
    updated_at

# Orders
    id,
    user_id,
    date,
    shipping_address:{},
    tracking_number,
    is_paid,
    is_shipped,
    status,
    createdAt
    updatedAt

# orderItems:
    id,
    order_id,
    unit_price,
    parchase_price,
    total_price,
    discount_id,
    product_id,
    qty,
    createdAt
    updatedAt

# brands:
    id,
    name,
    photo,
    description
    isActive,,
    user_id,
    createdAt
    updatedAt


# categories:
    id,
    name,
    parent_category_id,
    user_id,
    description
    isActive,
    createdAt
    updatedAt

# discounts:
    id,
    code,
    type,
    value,
    start_date,
    end_date,
    minimum_parchase,
    min_user,
    is_active,
    createdAt
    updatedAt

# shipingCarts:
    id,
    product_id,
    user_id,
    qty,
    createdAt,
    updatedAt

# wishlists:
    id,
    product_id,
    user_id,
    createdAt,
    updatedAt

# reviews:
    id,
    product_id,
    user_id,
    rating,
    review_text,
    status[reject, approved],
    createdAt
    updatedAt




# payments:
    id,
    order_id,
    date,
    payment_method,
    amount,
    user_id,
    is_successfull,
    transaction_id,
    createdAt
    updatedAt


# logs:
    id,
    user_id,
    product_id,
    order_id,
    order_item_id,
    category_id,
    wishlist_id,
    discount_id,
    review_id,
    shiping_cart_id,
    brand_id,
    payment_id,
    coupon_id,
    message/descripiton,
    createdAt
    updatedAt