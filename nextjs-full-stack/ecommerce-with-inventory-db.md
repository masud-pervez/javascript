## Ecommerce Application multivandor

# users:

    id,
    username:,
    password,
    email,
    name,
    type:[Customer, Vendor, Admin, Shipper, employee, supplier]
    phone,
    birthday,
    isAdmin,
    pre_address
    isActive
    imgUrl,
    created_at
    updated_at

# products:

    id,
    code,
    name,
    <!-- sale_price,
    purchase_price, -->
    type:[single, variable] as like wordpress
    unit_id,
    qty_alert,
    brand_id,
    category_id,
    <!-- barcode_symbology,
    item_barcode, -->
    user_id,
    description
    status,

    created_at
    updated_at

# product_brand

# product_size

# product_category

# colors

    id,
    code,
    name,
    description,
    slug,

# sizes

    id,
    code,
    name,
    image,
    price,
    regular_price,
    sale_price,
    description,
    slug,

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
    status
    applicable_products
    user_id,
    created_at
    updated_at

# Orders

    id,
    code,
    user_id,
    order_type["purchase","sale", "purchse return", "sale return"],
    date,
    shipping_cost,
    tax_id,
    discount_id,
    ware_house_id,
    tracking_number,
    is_paid,
    is_shipped:boolean,
    reference,
    status[Pending, Completed],
    created_by
    updated_by
    created_at
    updated_at

# orderItems:

    id,
    order_id,
    product_id,
    price,
    discount_id,
    location_id,
    qty,
    created_at
    updated_at

# discounts

    id,
    name,
    rate,
    type(percentage, fixed),
    note,
    status,
    created_at
    updated_at

# brands: brand hobe as like category moto

    id,
    name,
    photo,
    parent_id,
    description
    isActive,,
    user_id,
    status,
    created_at
    updated_at

# units:

    id,
    name,
    short_name
    user_id,
    status,
    created_at
    updated_at

# categories:

    id,
    name,
    parent_category_id,
    user_id,
    description
    status,
    created_at
    updated_at

# carts:

    id,
    product_id,
    user_id,
    qty,
    created_at,
    updated_at

# wishlists:

    id,
    product_id,
    user_id,
    created_at,
    updated_at

# payments:

    id,
    order_id,

    date,
    payment_method,
    amount,
    user_id,
    is_successfull,
    transaction_id,
    created_at
    updated_at

# reviews:

    id,
    product_id,
    user_id,
    rating,
    review_text,
    status[reject, approved],
    created_at
    updated_at

# gift_cards

    id,
    code,
    balance,
    expiration_date,
    issued_to,
    issued_by
    status,
    created_at
    updated_at

# logs:

    id,
    user_id,
    product_id,
    order_id
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
    created_at
    updated_at

# locations

    id,
    code,
    name
    status,
    created_at
    updated_at

# ware_houses

    id,
    name,
    address,
    status,
    created_at
    updated_at

# address

    id,
    unit_number,
    street_number,
    address_line_1,
    address_line_2,
    city,
    region,
    postal_code,
    user_id,
    order_id,
    created_at,
    updated_at,
