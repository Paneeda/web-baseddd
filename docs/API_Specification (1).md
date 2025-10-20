# BIC Bank API Specification

**Version:** 1.0.0  
**Base URL:** `http://localhost:8080/v1/api`  
**Protocol:** HTTP/HTTPS  
**Content-Type:** `application/json`

---

## Table of Contents

## Table of Contents

1. [General Information](#general-information)
2. [Authentication](#authentication)
3. [Response Format](#response-format)
4. [Error Codes](#error-codes)
5. [Exchange Rates API](#exchange-rates-api)
6. [News API](#news-api)
7. [Promotions API](#promotions-api)
8. [Products API](#products-api)
9. [Interest Rates API](#interest-rates-api)
10. [Organization Chart API](#organization-chart-api)
11. [Management Members API](#management-members-api)
12. [Image Slider API](#image-slider-api)
13. [Announcements API](#announcements-api)
14. [Form Downloads API](#form-downloads-api)
15. [Locations API](#locations-api)
16. [Fee & Charges API](#fee--charges-api)
17. [Languages API](#languages-api)
18. [Template Markdown API](#template-markdown-api)
19. [Media Management API](#media-management-api)
20. [Background Schedulers](#background-schedulers)

---

## General Information

### Health Check

Check API server status.

**Endpoint:** `GET /v1/api/health-check`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": null
}
```

### Version Information

Get API version.

**Endpoint:** `GET /v1/api/version`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "version": "1.0.0",
    "build": "production"
  }
}
```

---

## Authentication

Currently, the API does not require authentication. This will be implemented in future versions.

---

## Response Format

All API responses follow a consistent format:

```json
{
  "code": "string",
  "msg": "string",
  "data": "object|null"
}
```

**Fields:**
- `code`: Response code ("00" for success, "99" for error)
- `msg`: Response message
- `data`: Response data (null if no data)

---

## Error Codes

| Code | Description |
|------|-------------|
| `00` | Success |
| `99` | Error (check `msg` for details) |

---

## Exchange Rates API

### Update Exchange Rates

Update exchange rates from IBS system.

**Endpoint:** `POST /v1/api/exchange-rates`

**Request Body:**
```json
{
  "date": "2025-10-03"
}
```

**Response:**
```json
{
  "code": "00",
  "msg": "exchange rates updated successfully",
  "data": null
}
```

### Get Exchange Rates

Retrieve current or historical exchange rates.

**Endpoint:** `GET /v1/api/exchange-rates`

**Query Parameters:**
- `date` (optional): Specific date (YYYY-MM-DD format)

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "date": "2025-10-03",
    "last_updated": "2025-10-03 14:30:00",
    "rates": [
      {
        "fx_type": "USD-LAK",
        "sbprice": 21500.00,
        "ssprice": 21800.00,
        "seqno": 1
      },
      {
        "fx_type": "THB-LAK",
        "sbprice": 610.00,
        "ssprice": 625.00,
        "seqno": 2
      }
    ]
  }
}
```

---

## News API

### Create News

Create a new news post.

**Endpoint:** `POST /v1/api/news`

**Request Body:**
```json
{
  "title_text": {"en": "Breaking News", "lo": "ຂ່າວດ່ວນ"},
  "slug_text": {"en": "breaking-news", "lo": "breaking-news"},
  "content_text": {"en": "Full news content here...", "lo": "ເນື້ອຫາຂ່າວ..."},
  "h_img": "/media/images/news-header.jpg",
  "c_img": {"images": ["/media/images/img1.jpg", "/media/images/img2.jpg"]},
  "tags": ["economy", "banking", "finance"],
  "status": "published"
}
```

**Response:**
```json
{
  "code": "00",
  "msg": "created",
  "data": null
}
```

### Get News by ID

Retrieve a specific news post.

**Endpoint:** `GET /v1/api/news/:id`

**Query Parameters:**
- `lang` (optional): Language code (default: "en")

**Example:** `GET /v1/api/news/1?lang=en`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "news_id": 1,
    "title_text": "Breaking News",
    "slug_text": "breaking-news",
    "content_text": "Full news content here...",
    "h_img": "/media/images/news-header.jpg",
    "c_img": {"images": ["/media/images/img1.jpg"]},
    "tags": ["economy", "banking"],
    "created_at": "2025-10-03 10:00:00",
    "updated_at": "2025-10-03 10:00:00",
    "status": "published"
  }
}
```

### Update News

Update an existing news post.

**Endpoint:** `PUT /v1/api/news`

**Request Body:**
```json
{
  "news_id": 1,
  "title_text": {"en": "Updated News Title", "lo": "ຫົວຂໍ້ອັບເດດ"},
  "slug_text": {"en": "updated-news-title", "lo": "updated-news-title"},
  "content_text": {"en": "Updated content...", "lo": "ເນື້ອຫາອັບເດດ..."},
  "h_img": "/media/images/updated-header.jpg",
  "c_img": {"images": ["/media/images/img1.jpg"]},
  "tags": ["economy", "updates"],
  "status": "published"
}
```

**Response:**
```json
{
  "code": "00",
  "msg": "updated",
  "data": null
}
```

### Delete News

Delete a news post.

**Endpoint:** `DELETE /v1/api/news/:id`

**Example:** `DELETE /v1/api/news/1`

**Response:**
```json
{
  "code": "00",
  "msg": "deleted",
  "data": null
}
```

### List News

Retrieve a paginated list of news.

**Endpoint:** `GET /v1/api/news`

**Query Parameters:**
- `limit` (optional): Number of items per page (default: 20)
- `offset` (optional): Pagination offset (default: 0)
- `lang` (optional): Language code (default: "en")
- `status` (optional): Filter by status - "draft", "published", "disabled", or empty for all (default: all)

**Example - Get all published news:** `GET /v1/api/news?limit=10&offset=0&lang=en&status=published`

**Example - Get all news (including drafts):** `GET /v1/api/news?limit=10&offset=0&lang=en`

**Example - Get only draft news:** `GET /v1/api/news?limit=10&offset=0&lang=en&status=draft`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "total": 25,
    "news": [
      {
        "news_id": 1,
        "title_text": "Breaking News",
        "content_text": "News summary...",
        "h_img": "/media/images/news-header.jpg",
        "updated_at": "2025-10-03 10:00:00",
        "status": "published"
      }
    ]
  }
}
```

### Get News by ID (All Languages)

Retrieve a specific news post with all language data in JSONB format.

**Endpoint:** `GET /v1/api/news/:id/all-lang`

**Example:** `GET /v1/api/news/1/all-lang`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "news_id": 1,
    "title_text": {
      "en": "Breaking News",
      "lo": "ຂ່າວດ່ວນ",
      "th": "ข่าวด่วน"
    },
    "slug_text": {
      "en": "breaking-news",
      "lo": "breaking-news",
      "th": "breaking-news"
    },
    "content_text": {
      "en": "Full news content here...",
      "lo": "ເນື້ອຫາຂ່າວເຕັມ...",
      "th": "เนื้อหาข่าวเต็ม..."
    },
    "h_img": "/media/images/news-header.jpg",
    "c_img": {"images": ["/media/images/img1.jpg"]},
    "tags": ["economy", "banking"],
    "created_at": "2025-10-03 10:00:00",
    "updated_at": "2025-10-03 10:00:00",
    "status": "published"
  }
}
```

**Use Case:** This endpoint is useful for admin panels, content management systems, translation tools, or any application that needs to work with all language versions simultaneously.

### List News (All Languages)

Retrieve a paginated list of news with all language data.

**Endpoint:** `GET /v1/api/news/all-lang/list`

**Query Parameters:**
- `limit` (optional): Number of items per page (default: 20)
- `offset` (optional): Pagination offset (default: 0)
- `status` (optional): Filter by status - "draft", "published", "disabled", or empty for all (default: all)

**Example - Get all published news:** `GET /v1/api/news/all-lang/list?limit=10&offset=0&status=published`

**Example - Get all news (including drafts):** `GET /v1/api/news/all-lang/list?limit=10&offset=0`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "total": 25,
    "news": [
      {
        "news_id": 1,
        "title_text": {
          "en": "Breaking News",
          "lo": "ຂ່າວດ່ວນ",
          "th": "ข่าวด่วน"
        },
        "content_text": {
          "en": "News summary...",
          "lo": "ສະຫຼຸບຂ່າວ...",
          "th": "สรุปข่าว..."
        },
        "h_img": "/media/images/news-header.jpg",
        "updated_at": "2025-10-03 10:00:00",
        "status": "published"
      }
    ]
  }
}
```

---

## Promotions API

### Create Promotion

Create a new promotion.

**Endpoint:** `POST /v1/api/promo`

**Request Body:**
```json
{
  "title_text": {"en": "Special Offer", "lo": "ສະເພາະ"},
  "slug_text": {"en": "special-offer", "lo": "special-offer"},
  "content_text": {"en": "Promotion details...", "lo": "ລາຍລະອຽດ..."},
  "h_img": "/media/images/promo-header.jpg",
  "c_img": {"images": ["/media/images/promo1.jpg"]},
  "tags": ["promotion", "discount"],
  "status": "published"
}
```

**Response:**
```json
{
  "code": "00",
  "msg": "created",
  "data": null
}
```

### Get Promotion by ID

Retrieve a specific promotion.

**Endpoint:** `GET /v1/api/promo/:id`

**Query Parameters:**
- `lang` (optional): Language code (default: "en")

**Example:** `GET /v1/api/promo/1?lang=en`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "promo_id": 1,
    "title_text": "Special Offer",
    "slug_text": "special-offer",
    "content_text": "Promotion details...",
    "h_img": "/media/images/promo-header.jpg",
    "c_img": {"images": ["/media/images/promo1.jpg"]},
    "tags": ["promotion", "discount"],
    "created_at": "2025-10-03 10:00:00",
    "updated_at": "2025-10-03 10:00:00",
    "status": "published"
  }
}
```

### Update Promotion

Update an existing promotion.

**Endpoint:** `PUT /v1/api/promo`

**Request Body:**
```json
{
  "promo_id": 1,
  "title_text": {"en": "Updated Promotion", "lo": "ອັບເດດ"},
  "slug_text": {"en": "updated-promotion", "lo": "updated-promotion"},
  "content_text": {"en": "Updated details...", "lo": "ລາຍລະອຽດອັບເດດ..."},
  "h_img": "/media/images/updated-promo.jpg",
  "c_img": {"images": ["/media/images/promo1.jpg"]},
  "tags": ["promotion"],
  "status": "published"
}
```

**Response:**
```json
{
  "code": "00",
  "msg": "updated",
  "data": null
}
```

### Delete Promotion

Delete a promotion.

**Endpoint:** `DELETE /v1/api/promo/:id`

**Example:** `DELETE /v1/api/promo/1`

**Response:**
```json
{
  "code": "00",
  "msg": "deleted",
  "data": null
}
```

### List Promotions

Retrieve a paginated list of promotions.

**Endpoint:** `GET /v1/api/promos`

**Query Parameters:**
- `limit` (optional): Number of items per page (default: 20)
- `offset` (optional): Pagination offset (default: 0)
- `lang` (optional): Language code (default: "en")
- `status` (optional): Filter by status - "draft", "published", "disabled", or empty for all (default: all)

**Example - Get all published promos:** `GET /v1/api/promos?limit=10&offset=0&lang=en&status=published`

**Example - Get all promos (including drafts):** `GET /v1/api/promos?limit=10&offset=0&lang=en`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "total": 15,
    "promos": [
      {
        "promo_id": 1,
        "title_text": "Special Offer",
        "content_text": "Promo summary...",
        "h_img": "/media/images/promo-header.jpg",
        "updated_at": "2025-10-03 10:00:00",
        "status": "published"
      }
    ]
  }
}
```

### Get Promotion by ID (All Languages)

Retrieve a specific promotion with all language data in JSONB format.

**Endpoint:** `GET /v1/api/promo/:id/all-lang`

**Example:** `GET /v1/api/promo/1/all-lang`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "promo_id": 1,
    "title_text": {
      "en": "Special Offer",
      "lo": "ສະເພາະ",
      "th": "ข้อเสนอพิเศษ"
    },
    "slug_text": {
      "en": "special-offer",
      "lo": "special-offer",
      "th": "special-offer"
    },
    "content_text": {
      "en": "Promotion details...",
      "lo": "ລາຍລະອຽດໂປຣໂມຊັນ...",
      "th": "รายละเอียดโปรโมชั่น..."
    },
    "h_img": "/media/images/promo-header.jpg",
    "c_img": {"images": ["/media/images/promo1.jpg"]},
    "tags": ["promotion", "discount"],
    "created_at": "2025-10-03 10:00:00",
    "updated_at": "2025-10-03 10:00:00",
    "status": "published"
  }
}
```

### List Promotions (All Languages)

Retrieve a paginated list of promotions with all language data.

**Endpoint:** `GET /v1/api/promos/all-lang`

**Query Parameters:**
- `limit` (optional): Number of items per page (default: 20)
- `offset` (optional): Pagination offset (default: 0)
- `status` (optional): Filter by status - "draft", "published", "disabled", or empty for all (default: all)

**Example - Get all published promos:** `GET /v1/api/promos/all-lang?limit=10&offset=0&status=published`

**Example - Get all promos (including drafts):** `GET /v1/api/promos/all-lang?limit=10&offset=0`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "total": 15,
    "promos": [
      {
        "promo_id": 1,
        "title_text": {
          "en": "Special Offer",
          "lo": "ສະເພາະ",
          "th": "ข้อเสนอพิเศษ"
        },
        "content_text": {
          "en": "Promo summary...",
          "lo": "ສະຫຼຸບໂປຣໂມຊັນ...",
          "th": "สรุปโปรโมชั่น..."
        },
        "h_img": "/media/images/promo-header.jpg",
        "updated_at": "2025-10-03 10:00:00",
        "status": "published"
      }
    ]
  }
}
```

---

## Products API

### Create Product

Create a new product.

**Endpoint:** `POST /v1/api/product`

**Request Body:**
```json
{
  "title_text": {"en": "Savings Account", "lo": "ບັນຊີເງິນຝາກ"},
  "slug_text": {"en": "savings-account", "lo": "savings-account"},
  "content_text": {"en": "Product description...", "lo": "ລາຍລະອຽດ..."},
  "h_img": "/media/images/product-header.jpg",
  "c_img": {"images": ["/media/images/product1.jpg"]},
  "tags": ["savings", "account"],
  "status": "published"
}
```

**Response:**
```json
{
  "code": "00",
  "msg": "created",
  "data": null
}
```

### Get Product by ID

Retrieve a specific product.

**Endpoint:** `GET /v1/api/product/:id`

**Query Parameters:**
- `lang` (optional): Language code (default: "en")

**Example:** `GET /v1/api/product/1?lang=en`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "product_id": 1,
    "title_text": "Savings Account",
    "slug_text": "savings-account",
    "content_text": "Product description...",
    "h_img": "/media/images/product-header.jpg",
    "c_img": {"images": ["/media/images/product1.jpg"]},
    "tags": ["savings", "account"],
    "created_at": "2025-10-03 10:00:00",
    "updated_at": "2025-10-03 10:00:00",
    "status": "published"
  }
}
```

### Update Product

Update an existing product.

**Endpoint:** `PUT /v1/api/product`

**Request Body:**
```json
{
  "product_id": 1,
  "title_text": {"en": "Updated Product", "lo": "ຜະລິດຕະພັນອັບເດດ"},
  "slug_text": {"en": "updated-product", "lo": "updated-product"},
  "content_text": {"en": "Updated description...", "lo": "ອັບເດດ..."},
  "h_img": "/media/images/updated-product.jpg",
  "c_img": {"images": ["/media/images/product1.jpg"]},
  "tags": ["savings"],
  "status": "published"
}
```

**Response:**
```json
{
  "code": "00",
  "msg": "updated",
  "data": null
}
```

### Delete Product

Delete a product.

**Endpoint:** `DELETE /v1/api/product/:id`

**Example:** `DELETE /v1/api/product/1`

**Response:**
```json
{
  "code": "00",
  "msg": "deleted",
  "data": null
}
```

### List Products

Retrieve a paginated list of products.

**Endpoint:** `GET /v1/api/products`

**Query Parameters:**
- `limit` (optional): Number of items per page (default: 20)
- `offset` (optional): Pagination offset (default: 0)
- `lang` (optional): Language code (default: "en")
- `status` (optional): Filter by status - "draft", "published", "disabled", or empty for all (default: all)

**Example - Get all published products:** `GET /v1/api/products?limit=10&offset=0&lang=en&status=published`

**Example - Get all products (including drafts):** `GET /v1/api/products?limit=10&offset=0&lang=en`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "total": 12,
    "products": [
      {
        "product_id": 1,
        "title_text": "Savings Account",
        "content_text": "Product summary...",
        "h_img": "/media/images/product-header.jpg",
        "updated_at": "2025-10-03 10:00:00",
        "status": "published"
      }
    ]
  }
}
```

### Get Product by ID (All Languages)

Retrieve a specific product with all language data in JSONB format.

**Endpoint:** `GET /v1/api/product/:id/all-lang`

**Example:** `GET /v1/api/product/1/all-lang`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "product_id": 1,
    "title_text": {
      "en": "Savings Account",
      "lo": "ບັນຊີເງິນຝາກ",
      "th": "บัญชีออมทรัพย์"
    },
    "slug_text": {
      "en": "savings-account",
      "lo": "savings-account",
      "th": "savings-account"
    },
    "content_text": {
      "en": "Product description...",
      "lo": "ລາຍລະອຽດຜະລິດຕະພັນ...",
      "th": "รายละเอียดผลิตภัณฑ์..."
    },
    "h_img": "/media/images/product-header.jpg",
    "c_img": {"images": ["/media/images/product1.jpg"]},
    "tags": ["savings", "account"],
    "created_at": "2025-10-03 10:00:00",
    "updated_at": "2025-10-03 10:00:00",
    "status": "published"
  }
}
```

### List Products (All Languages)

Retrieve a paginated list of products with all language data.

**Endpoint:** `GET /v1/api/products/all-lang`

**Query Parameters:**
- `limit` (optional): Number of items per page (default: 20)
- `offset` (optional): Pagination offset (default: 0)
- `status` (optional): Filter by status - "draft", "published", "disabled", or empty for all (default: all)

**Example - Get all published products:** `GET /v1/api/products/all-lang?limit=10&offset=0&status=published`

**Example - Get all products (including drafts):** `GET /v1/api/products/all-lang?limit=10&offset=0`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "total": 12,
    "products": [
      {
        "product_id": 1,
        "title_text": {
          "en": "Savings Account",
          "lo": "ບັນຊີເງິນຝາກ",
          "th": "บัญชีออมทรัพย์"
        },
        "content_text": {
          "en": "Product summary...",
          "lo": "ສະຫຼຸບຜະລິດຕະພັນ...",
          "th": "สรุปผลิตภัณฑ์..."
        },
        "h_img": "/media/images/product-header.jpg",
        "updated_at": "2025-10-03 10:00:00",
        "status": "published"
      }
    ]
  }
}
```

---

## Interest Rates API

### Create Interest Rate

Create a new interest rate entry.

**Endpoint:** `POST /v1/api/interest`

**Request Body:**
```json
{
  "interest_type": {"en": "Savings Deposit", "lo": "ເງິນຝາກປະຢັດ"},
  "lak_ccy": 3.50,
  "thb_ccy": 2.00,
  "usd_ccy": 1.50,
  "cny_ccy": 2.25,
  "vnd_ccy": 4.00,
  "rub_ccy": 5.50
}
```

**Response:**
```json
{
  "code": "00",
  "msg": "created",
  "data": null
}
```

### Update Interest Rate

Update an existing interest rate.

**Endpoint:** `PUT /v1/api/interest`

**Request Body:**
```json
{
  "interest_id": 1,
  "interest_type": {"en": "Fixed Deposit", "lo": "ເງິນຝາກປະຈຳ"},
  "lak_ccy": 4.00,
  "thb_ccy": 2.50,
  "usd_ccy": 2.00,
  "cny_ccy": 2.75,
  "vnd_ccy": 4.50,
  "rub_ccy": 6.00
}
```

**Response:**
```json
{
  "code": "00",
  "msg": "updated",
  "data": null
}
```

### Delete Interest Rate

Delete an interest rate entry.

**Endpoint:** `DELETE /v1/api/interest/:id`

**Example:** `DELETE /v1/api/interest/1`

**Response:**
```json
{
  "code": "00",
  "msg": "deleted",
  "data": null
}
```

### List Interest Rates

Retrieve all interest rates.

**Endpoint:** `GET /v1/api/interests`

**Query Parameters:**
- `lang` (optional): Language code (default: "en")

**Example:** `GET /v1/api/interests?lang=en`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": [
    {
      "interest_type": "Savings Deposit",
      "lak_ccy": 3.50,
      "thb_ccy": 2.00,
      "usd_ccy": 1.50
    },
    {
      "interest_type": "Fixed Deposit",
      "lak_ccy": 4.00,
      "thb_ccy": 2.50,
      "usd_ccy": 2.00
    }
  ]
}
```

### List Interest Rates (All Languages)

Retrieve all interest rates with all language data in JSONB format.

**Endpoint:** `GET /v1/api/interests/all-lang`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": [
    {
      "interest_type": {
        "en": "Savings Deposit",
        "lo": "ເງິນຝາກປະຢັດ",
        "th": "เงินฝากออมทรัพย์"
      },
      "lak_ccy": 3.50,
      "thb_ccy": 2.00,
      "usd_ccy": 1.50
    },
    {
      "interest_type": {
        "en": "Fixed Deposit",
        "lo": "ເງິນຝາກປະຈຳ",
        "th": "เงินฝากประจำ"
      },
      "lak_ccy": 4.00,
      "thb_ccy": 2.50,
      "usd_ccy": 2.00
    }
  ]
}
```

**Note:** This endpoint returns the raw `interest_type` field which may be either a JSONB object (with multiple languages) or a plain text string, depending on how the data was stored.

---

## Organization Chart API

### Create Organization Chart

Create a new organization chart entry.

**Endpoint:** `POST /v1/api/orgchart`

**Request Body:**
```json
{
  "org_name": "Board of Directors",
  "org_description": "The governing body of the bank",
  "image_url": "/media/images/bod-chart.png",
  "usage_status": "Y"
}
```

**Response:**
```json
{
  "code": "00",
  "msg": "created",
  "data": null
}
```

### Get Organization Chart by ID

Retrieve a specific organization chart.

**Endpoint:** `GET /v1/api/orgchart/:id`

**Example:** `GET /v1/api/orgchart/1`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "org_id": 1,
    "org_name": "Board of Directors",
    "org_description": "The governing body of the bank",
    "image_url": "/media/images/bod-chart.png",
    "usage_status": "Y",
    "created_at": "2025-10-03 10:00:00",
    "updated_at": "2025-10-03 10:00:00"
  }
}
```

### Update Organization Chart

Update an existing organization chart.

**Endpoint:** `PUT /v1/api/orgchart`

**Request Body:**
```json
{
  "org_id": 1,
  "org_name": "Updated Board Structure",
  "org_description": "Updated description",
  "image_url": "/media/images/updated-chart.png",
  "usage_status": "Y"
}
```

**Response:**
```json
{
  "code": "00",
  "msg": "updated",
  "data": null
}
```

### Delete Organization Chart

Delete an organization chart.

**Endpoint:** `DELETE /v1/api/orgchart/:id`

**Example:** `DELETE /v1/api/orgchart/1`

**Response:**
```json
{
  "code": "00",
  "msg": "deleted",
  "data": null
}
```

### List Organization Charts

Retrieve a paginated list of organization charts.

**Endpoint:** `GET /v1/api/orgcharts`

**Query Parameters:**
- `limit` (optional): Number of items per page (default: 20)
- `offset` (optional): Pagination offset (default: 0)

**Example:** `GET /v1/api/orgcharts?limit=10&offset=0`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "total": 3,
    "org_charts": [
      {
        "org_id": 1,
        "org_name": "Board of Directors",
        "org_description": "The governing body",
        "image_url": "/media/images/bod-chart.png",
        "usage_status": "Y",
        "created_at": "2025-10-03 10:00:00",
        "updated_at": "2025-10-03 10:00:00"
      }
    ]
  }
}
```

---

## Management Members API

### Create Management Member

Create a new management member.

**Endpoint:** `POST /v1/api/mgnt-member`

**Request Body:**
```json
{
  "mgnt_name": "John Doe",
  "mgnt_type": "Executive",
  "position": "Chief Executive Officer",
  "image_url": "/media/images/ceo-photo.jpg",
  "start_date": "2020-01-01",
  "end_date": null
}
```

**Response:**
```json
{
  "code": "00",
  "msg": "created",
  "data": null
}
```

### Get Management Member by ID

Retrieve a specific management member.

**Endpoint:** `GET /v1/api/mgnt-member/:id`

**Example:** `GET /v1/api/mgnt-member/1`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "mgnt_id": 1,
    "mgnt_name": "John Doe",
    "mgnt_type": "Executive",
    "position": "Chief Executive Officer",
    "image_url": "/media/images/ceo-photo.jpg",
    "start_date": "2020-01-01",
    "end_date": null
  }
}
```

### Update Management Member

Update an existing management member.

**Endpoint:** `PUT /v1/api/mgnt-member`

**Request Body:**
```json
{
  "mgnt_id": 1,
  "mgnt_name": "John Doe",
  "mgnt_type": "Executive",
  "position": "CEO & President",
  "image_url": "/media/images/ceo-updated.jpg",
  "start_date": "2020-01-01",
  "end_date": null
}
```

**Response:**
```json
{
  "code": "00",
  "msg": "updated",
  "data": null
}
```

### Delete Management Member

Delete a management member.

**Endpoint:** `DELETE /v1/api/mgnt-member/:id`

**Example:** `DELETE /v1/api/mgnt-member/1`

**Response:**
```json
{
  "code": "00",
  "msg": "deleted",
  "data": null
}
```

### List Management Members

Retrieve a paginated list of management members.

**Endpoint:** `GET /v1/api/mgnt-members`

**Query Parameters:**
- `limit` (optional): Number of items per page (default: 20)
- `offset` (optional): Pagination offset (default: 0)

**Example:** `GET /v1/api/mgnt-members?limit=10&offset=0`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "total": 8,
    "members": [
      {
        "mgnt_id": 1,
        "mgnt_name": "John Doe",
        "mgnt_type": "Executive",
        "position": "CEO",
        "image_url": "/media/images/ceo-photo.jpg",
        "start_date": "2020-01-01",
        "end_date": null
      }
    ]
  }
}
```

---

## Image Slider API

### Create Image Slider

Create a new image slider.

**Endpoint:** `POST /v1/api/image-slider`

**Request Body:**
```json
{
  "img_url": "/media/images/slider-banner1.jpg",
  "img_order": 1,
  "status": "active"
}
```

**Response:**
```json
{
  "code": "00",
  "msg": "created",
  "data": null
}
```

### Get Image Slider by ID

Retrieve a specific image slider.

**Endpoint:** `GET /v1/api/image-slider/:id`

**Example:** `GET /v1/api/image-slider/1`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "id": 1,
    "img_url": "/media/images/slider-banner1.jpg",
    "img_order": 1,
    "status": "active"
  }
}
```

### Update Image Slider

Update an existing image slider.

**Endpoint:** `PUT /v1/api/image-slider`

**Request Body:**
```json
{
  "id": 1,
  "img_url": "/media/images/updated-banner.jpg",
  "img_order": 2,
  "status": "inactive"
}
```

**Response:**
```json
{
  "code": "00",
  "msg": "updated",
  "data": null
}
```

### Delete Image Slider

Delete an image slider.

**Endpoint:** `DELETE /v1/api/image-slider/:id`

**Example:** `DELETE /v1/api/image-slider/1`

**Response:**
```json
{
  "code": "00",
  "msg": "deleted",
  "data": null
}
```

### List Image Sliders

Retrieve a paginated list of image sliders.

**Endpoint:** `GET /v1/api/image-sliders`

**Query Parameters:**
- `limit` (optional): Number of items per page (default: 20)
- `offset` (optional): Pagination offset (default: 0)
- `status` (optional): Filter by status ("active", "inactive", or empty for all)

**Example:** `GET /v1/api/image-sliders?limit=10&offset=0&status=active`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "total": 5,
    "sliders": [
      {
        "id": 1,
        "img_url": "/media/images/slider-banner1.jpg",
        "img_order": 1,
        "status": "active"
      }
    ]
  }
}
```

---

## Announcements API

### Create Announcement

Create a new announcement.

**Endpoint:** `POST /v1/api/announcement`

**Request Body:**
```json
{
  "title_text": {"en": "Important Notice", "lo": "ແຈ້ງການສຳຄັນ"},
  "content_text": {"en": "Announcement details...", "lo": "ລາຍລະອຽດແຈ້ງການ..."},
  "header_image": "/media/images/announcement-header.jpg",
  "ann_order": 1,
  "status": "active"
}
```

**Response:**
```json
{
  "code": "00",
  "msg": "created",
  "data": null
}
```

### Get Announcement by ID

Retrieve a specific announcement.

**Endpoint:** `GET /v1/api/announcement/:id`

**Query Parameters:**
- `lang` (optional): Language code (default: "en")

**Example:** `GET /v1/api/announcement/1?lang=en`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "ann_id": 1,
    "title_text": "Important Notice",
    "content_text": "Announcement details...",
    "header_image": "/media/images/announcement-header.jpg",
    "ann_order": 1,
    "status": "active"
  }
}
```

### Update Announcement

Update an existing announcement.

**Endpoint:** `PUT /v1/api/announcement`

**Request Body:**
```json
{
  "ann_id": 1,
  "title_text": {"en": "Updated Notice", "lo": "ແຈ້ງການອັບເດດ"},
  "content_text": {"en": "Updated details...", "lo": "ລາຍລະອຽດອັບເດດ..."},
  "header_image": "/media/images/updated-announcement.jpg",
  "ann_order": 1,
  "status": "active"
}
```

**Response:**
```json
{
  "code": "00",
  "msg": "updated",
  "data": null
}
```

### Delete Announcement

Delete an announcement.

**Endpoint:** `DELETE /v1/api/announcement/:id`

**Example:** `DELETE /v1/api/announcement/1`

**Response:**
```json
{
  "code": "00",
  "msg": "deleted",
  "data": null
}
```

### List Announcements

Retrieve a paginated list of announcements.

**Endpoint:** `GET /v1/api/announcements`

**Query Parameters:**
- `limit` (optional): Number of items per page (default: 20)
- `offset` (optional): Pagination offset (default: 0)
- `lang` (optional): Language code (default: "en")
- `status` (optional): Filter by status ("active", "inactive", or empty for all)

**Example:** `GET /v1/api/announcements?limit=10&offset=0&lang=en&status=active`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "total": 7,
    "announcements": [
      {
        "ann_id": 1,
        "title_text": "Important Notice",
        "content_text": "Announcement details...",
        "status": "active"
      }
    ]
  }
}
```

### Get Announcement by ID (All Languages)

Retrieve a specific announcement with all language data in JSONB format.

**Endpoint:** `GET /v1/api/announcement/:id/all-lang`

**Example:** `GET /v1/api/announcement/1/all-lang`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "ann_id": 1,
    "title_text": {
      "en": "Important Notice",
      "lo": "ແຈ້ງການສຳຄັນ",
      "th": "ประกาศสำคัญ"
    },
    "content_text": {
      "en": "Announcement details...",
      "lo": "ລາຍລະອຽດແຈ້ງການ...",
      "th": "รายละเอียดประกาศ..."
    },
    "header_image": "/media/images/announcement-header.jpg",
    "ann_order": 1,
    "status": "active"
  }
}
```

### List Announcements (All Languages)

Retrieve a paginated list of announcements with all language data.

**Endpoint:** `GET /v1/api/announcements/all-lang`

**Query Parameters:**
- `limit` (optional): Number of items per page (default: 20)
- `offset` (optional): Pagination offset (default: 0)
- `status` (optional): Filter by status ("active", "inactive", or empty for all)

**Example:** `GET /v1/api/announcements/all-lang?limit=10&offset=0&status=active`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "total": 7,
    "announcements": [
      {
        "ann_id": 1,
        "title_text": {
          "en": "Important Notice",
          "lo": "ແຈ້ງການສຳຄັນ",
          "th": "ประกาศสำคัญ"
        },
        "content_text": {
          "en": "Announcement details...",
          "lo": "ລາຍລະອຽດແຈ້ງການ...",
          "th": "รายละเอียดประกาศ..."
        },
        "status": "active"
      }
    ]
  }
}
```

---

## Form Downloads API

Manage downloadable forms with multilingual support for titles, descriptions, and file URLs.

### Create Form Download

Create a new downloadable form with multilingual support.

**Endpoint:** `POST /v1/api/form-download`

**Request Body:**
```json
{
  "title": {
    "en": "Personal Loan Application",
    "lo": "ແບບຟອມສະໝັກກູ້ຢືມສ່ວນບຸກຄົນ",
    "zh": "个人贷款申请"
  },
  "description": {
    "en": "Application form for personal loans",
    "lo": "ແບບຟອມສຳລັບການສະໝັກກູ້ຢືມສ່ວນບຸກຄົນ",
    "zh": "个人贷款申请表"
  },
  "group_id": "loan",
  "file_url": {
    "en": "/media/forms/personal-loan-en.pdf",
    "lo": "/media/forms/personal-loan-lo.pdf",
    "zh": "/media/forms/personal-loan-zh.pdf"
  },
  "file_type": "pdf",
  "file_order": 1,
  "file_year": 2025,
  "status": "active"
}
```

**Field Descriptions:**
- `title` (object, required) - JSONB object with language codes as keys
- `description` (object, required) - JSONB object with language codes as keys
- `group_id` (string, required) - Form group: "application", "ibanking", "report", "account", "loan", "other"
- `file_url` (object, required) - JSONB object with language-specific file paths
- `file_type` (string, required) - File type: "pdf", "docx", "xlsx", etc.
- `file_order` (integer, optional) - Display order (default: 0)
- `file_year` (integer, optional) - Year of the form
- `status` (string, optional) - Status: "active" or "inactive" (default: "active")

**Response:**
```json
{
  "code": "00",
  "msg": "created",
  "data": null
}
```

### Get Form Download by ID

Retrieve a specific form with all language data.

**Endpoint:** `GET /v1/api/form-download/:id`

**Example:** `GET /v1/api/form-download/1`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "form_id": 1,
    "title": {
      "en": "Personal Loan Application",
      "lo": "ແບບຟອມສະໝັກກູ້ຢືມສ່ວນບຸກຄົນ",
      "zh": "个人贷款申请"
    },
    "description": {
      "en": "Application form for personal loans",
      "lo": "ແບບຟອມສຳລັບການສະໝັກກູ້ຢືມສ່ວນບຸກຄົນ",
      "zh": "个人贷款申请表"
    },
    "group_id": "loan",
    "file_url": {
      "en": "/media/forms/personal-loan-en.pdf",
      "lo": "/media/forms/personal-loan-lo.pdf",
      "zh": "/media/forms/personal-loan-zh.pdf"
    },
    "file_type": "pdf",
    "file_order": 1,
    "file_year": 2025,
    "created_at": "2025-10-09 10:00:00",
    "updated_at": "2025-10-09 10:00:00",
    "status": "active"
  }
}
```

### Update Form Download

Update an existing form.

**Endpoint:** `PUT /v1/api/form-download`

**Request Body:**
```json
{
  "form_id": 1,
  "title": {
    "en": "Updated Personal Loan Application",
    "lo": "ແບບຟອມສະໝັກກູ້ຢືມສ່ວນບຸກຄົນ (ອັບເດດ)",
    "zh": "个人贷款申请（更新）"
  },
  "description": {
    "en": "Updated application form for personal loans",
    "lo": "ແບບຟອມອັບເດດສຳລັບການສະໝັກກູ້ຢືມສ່ວນບຸກຄົນ",
    "zh": "更新的个人贷款申请表"
  },
  "group_id": "loan",
  "file_url": {
    "en": "/media/forms/personal-loan-v2-en.pdf",
    "lo": "/media/forms/personal-loan-v2-lo.pdf",
    "zh": "/media/forms/personal-loan-v2-zh.pdf"
  },
  "file_type": "pdf",
  "file_order": 1,
  "file_year": 2025,
  "status": "active"
}
```

**Response:**
```json
{
  "code": "00",
  "msg": "updated",
  "data": null
}
```

### Delete Form Download

Delete a form.

**Endpoint:** `DELETE /v1/api/form-download/:id`

**Example:** `DELETE /v1/api/form-download/1`

**Response:**
```json
{
  "code": "00",
  "msg": "deleted",
  "data": null
}
```

### List Form Downloads

Retrieve a paginated list of forms with language-specific content.

**Endpoint:** `GET /v1/api/form-downloads`

**Query Parameters:**
- `limit` (optional): Number of items per page (default: 20)
- `offset` (optional): Pagination offset (default: 0)
- `lang` (optional): Language code (default: "en")
- `status` (optional): Filter by status ("active", "inactive", or empty for all)
- `group_id` (optional): Filter by group ("application", "ibanking", "report", "account", "loan", "other")
- `file_type` (optional): Filter by file type ("pdf", "docx", "xlsx", etc.)
- `file_year` (optional): Filter by year

**Example:** `GET /v1/api/form-downloads?limit=10&offset=0&lang=en&status=active&group_id=loan&file_year=2025`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "total": 25,
    "forms": [
      {
        "form_id": 1,
        "title_text": "Personal Loan Application",
        "desc_text": "Application form for personal loans",
        "group_id": "loan",
        "file_url_text": "/media/forms/personal-loan-en.pdf",
        "file_type": "pdf",
        "file_order": 1,
        "file_year": 2025,
        "created_at": "2025-10-09 10:00:00",
        "updated_at": "2025-10-09 10:00:00",
        "status": "active"
      }
    ]
  }
}
```

**Note:** The response returns language-specific extracted text based on the `lang` parameter. Fields are named `title_text`, `desc_text`, and `file_url_text`.

### List Form Downloads (All Languages)

Retrieve a paginated list of forms with all language data in JSONB format.

**Endpoint:** `GET /v1/api/form-downloads/all-lang`

**Query Parameters:**
- `limit` (optional): Number of items per page (default: 20)
- `offset` (optional): Pagination offset (default: 0)
- `status` (optional): Filter by status ("active", "inactive", or empty for all)
- `group_id` (optional): Filter by group
- `file_type` (optional): Filter by file type
- `file_year` (optional): Filter by year

**Example:** `GET /v1/api/form-downloads/all-lang?limit=10&offset=0&status=active`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "total": 25,
    "forms": [
      {
        "form_id": 1,
        "title": {
          "en": "Personal Loan Application",
          "lo": "ແບບຟອມສະໝັກກູ້ຢືມສ່ວນບຸກຄົນ",
          "zh": "个人贷款申请"
        },
        "description": {
          "en": "Application form for personal loans",
          "lo": "ແບບຟອມສຳລັບການສະໝັກກູ້ຢືມສ່ວນບຸກຄົນ",
          "zh": "个人贷款申请表"
        },
        "group_id": "loan",
        "file_url": {
          "en": "/media/forms/personal-loan-en.pdf",
          "lo": "/media/forms/personal-loan-lo.pdf",
          "zh": "/media/forms/personal-loan-zh.pdf"
        },
        "file_type": "pdf",
        "file_order": 1,
        "file_year": 2025,
        "created_at": "2025-10-09 10:00:00",
        "updated_at": "2025-10-09 10:00:00",
        "status": "active"
      }
    ]
  }
}
```

**Use Case:** This endpoint is useful for admin panels where you need to edit all language versions of forms simultaneously.

**Form Groups:**
- `application` - Application forms
- `ibanking` - Internet banking forms
- `report` - Report forms
- `account` - Account-related forms
- `loan` - Loan-related forms
- `other` - Other forms

---

## Locations API

Manage branch, ATM, and office locations with multilingual support.

### Create Location

Create a new location entry.

**Endpoint:** `POST /v1/api/location`

**Request Body:**
```json
{
  "location_name": {
    "en": "Vientiane Main Branch",
    "lo": "ສາຂາໃຫຍ່ນະຄອນຫຼວງວຽງຈັນ",
    "zh": "万象主要分行"
  },
  "location_address": {
    "en": "123 Lane Xang Avenue, Vientiane Capital",
    "lo": "123 ຖະໜົນລານຊ້າງ, ນະຄອນຫຼວງວຽງຈັນ",
    "zh": "万象首都澜沧大道123号"
  },
  "group_id": "branch",
  "phone": {
    "tel1": "+856 21 123456",
    "tel2": "+856 21 123457"
  },
  "email": {
    "email1": "vientiane@bicbank.la",
    "email2": "support@bicbank.la"
  },
  "latitude": 17.9757,
  "longitude": 102.6331,
  "operating_hours": "Mon-Fri: 8:30-15:30, Sat: 8:30-12:00"
}
```

**Field Descriptions:**
- `location_name` (object, required) - JSONB object with language codes as keys
- `location_address` (object, required) - JSONB object with language codes as keys
- `group_id` (string, required) - Location type: "branch", "atm", "office"
- `phone` (object, optional) - JSONB object with phone numbers (tel1, tel2, etc.)
- `email` (object, optional) - JSONB object with email addresses (email1, email2, etc.)
- `latitude` (float, optional) - GPS latitude coordinate
- `longitude` (float, optional) - GPS longitude coordinate
- `operating_hours` (string, optional) - Operating hours information

**Response:**
```json
{
  "code": "00",
  "msg": "created",
  "data": null
}
```

### Get Location by ID

Retrieve a specific location with all language data.

**Endpoint:** `GET /v1/api/location/:id`

**Example:** `GET /v1/api/location/1`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "location_id": 1,
    "location_name": {
      "en": "Vientiane Main Branch",
      "lo": "ສາຂາໃຫຍ່ນະຄອນຫຼວງວຽງຈັນ",
      "zh": "万象主要分行"
    },
    "location_address": {
      "en": "123 Lane Xang Avenue, Vientiane Capital",
      "lo": "123 ຖະໜົນລານຊ້າງ, ນະຄອນຫຼວງວຽງຈັນ",
      "zh": "万象首都澜沧大道123号"
    },
    "group_id": "branch",
    "phone": {
      "tel1": "+856 21 123456",
      "tel2": "+856 21 123457"
    },
    "email": {
      "email1": "vientiane@bicbank.la",
      "email2": "support@bicbank.la"
    },
    "latitude": 17.9757,
    "longitude": 102.6331,
    "operating_hours": "Mon-Fri: 8:30-15:30, Sat: 8:30-12:00",
    "created_at": "2025-10-09 10:00:00",
    "updated_at": "2025-10-09 10:00:00"
  }
}
```

### Update Location

Update an existing location.

**Endpoint:** `PUT /v1/api/location`

**Request Body:**
```json
{
  "location_id": 1,
  "location_name": {
    "en": "Vientiane Main Branch (Updated)",
    "lo": "ສາຂາໃຫຍ່ນະຄອນຫຼວງວຽງຈັນ (ອັບເດດ)",
    "zh": "万象主要分行（更新）"
  },
  "location_address": {
    "en": "123 Lane Xang Avenue, Vientiane Capital",
    "lo": "123 ຖະໜົນລານຊ້າງ, ນະຄອນຫຼວງວຽງຈັນ",
    "zh": "万象首都澜沧大道123号"
  },
  "group_id": "branch",
  "phone": {
    "tel1": "+856 21 123456"
  },
  "email": {
    "email1": "vientiane@bicbank.la"
  },
  "latitude": 17.9757,
  "longitude": 102.6331,
  "operating_hours": "Mon-Fri: 8:30-16:00, Sat: 8:30-12:00"
}
```

**Response:**
```json
{
  "code": "00",
  "msg": "updated",
  "data": null
}
```

### Delete Location

Delete a location.

**Endpoint:** `DELETE /v1/api/location/:id`

**Example:** `DELETE /v1/api/location/1`

**Response:**
```json
{
  "code": "00",
  "msg": "deleted",
  "data": null
}
```

### List Locations

Retrieve a paginated list of locations.

**Endpoint:** `GET /v1/api/locations`

**Query Parameters:**
- `limit` (optional): Number of items per page (default: 20)
- `offset` (optional): Pagination offset (default: 0)
- `group_id` (optional): Filter by type ("branch", "atm", "office")

**Example - Get all branches:** `GET /v1/api/locations?group_id=branch`

**Example - Get all ATMs:** `GET /v1/api/locations?group_id=atm`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "total": 15,
    "locations": [
      {
        "location_id": 1,
        "location_name": {
          "en": "Vientiane Main Branch",
          "lo": "ສາຂາໃຫຍ່ນະຄອນຫຼວງວຽງຈັນ",
          "zh": "万象主要分行"
        },
        "location_address": {
          "en": "123 Lane Xang Avenue, Vientiane Capital",
          "lo": "123 ຖະໜົນລານຊ້າງ, ນະຄອນຫຼວງວຽງຈັນ",
          "zh": "万象首都澜沧大道123号"
        },
        "group_id": "branch",
        "phone": {
          "tel1": "+856 21 123456"
        },
        "email": {
          "email1": "vientiane@bicbank.la"
        },
        "latitude": 17.9757,
        "longitude": 102.6331,
        "operating_hours": "Mon-Fri: 8:30-15:30",
        "created_at": "2025-10-09 10:00:00",
        "updated_at": "2025-10-09 10:00:00"
      }
    ]
  }
}
```

**Location Groups:**
- `branch` - Bank branches
- `atm` - ATM locations
- `office` - Office locations

---

## Fee & Charges API

Manage banking fees and charges across multiple currencies with multilingual support.

### Create Fee Charge

Create a new fee charge entry.

**Endpoint:** `POST /v1/api/fee-charge`

**Request Body:**
```json
{
  "fee_category": "account",
  "fee_type": {
    "en": "Monthly Account Maintenance Fee",
    "lo": "ຄ່າບໍລິການບັນຊີລາຍເດືອນ",
    "zh": "月账户维护费"
  },
  "description": {
    "en": "Monthly fee for account maintenance and services",
    "lo": "ຄ່າທຳນຽມລາຍເດືອນສຳລັບການບໍລິການບັນຊີ",
    "zh": "账户维护和服务的月费"
  },
  "amt_lak": 50000.00,
  "amt_usd": 5.00,
  "amt_thb": 150.00,
  "amt_cny": 35.00,
  "amt_vnd": 115000.00,
  "amt_rub": 450.00
}
```

**Field Descriptions:**
- `fee_category` (string, required) - Fee category: "account", "loan", "remittance", "card", "transfer", "other"
- `fee_type` (object, required) - JSONB object with language codes as keys
- `description` (object, required) - JSONB object with language codes as keys
- `amt_lak` (decimal, optional) - Fee amount in LAK
- `amt_usd` (decimal, optional) - Fee amount in USD
- `amt_thb` (decimal, optional) - Fee amount in THB
- `amt_cny` (decimal, optional) - Fee amount in CNY
- `amt_vnd` (decimal, optional) - Fee amount in VND
- `amt_rub` (decimal, optional) - Fee amount in RUB

**Response:**
```json
{
  "code": "00",
  "msg": "created",
  "data": null
}
```

### Get Fee Charge by ID

Retrieve a specific fee charge with all language data.

**Endpoint:** `GET /v1/api/fee-charge/:id`

**Example:** `GET /v1/api/fee-charge/1`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "fee_id": 1,
    "fee_category": "account",
    "fee_type": {
      "en": "Monthly Account Maintenance Fee",
      "lo": "ຄ່າບໍລິການບັນຊີລາຍເດືອນ",
      "zh": "月账户维护费"
    },
    "description": {
      "en": "Monthly fee for account maintenance and services",
      "lo": "ຄ່າທຳນຽມລາຍເດືອນສຳລັບການບໍລິການບັນຊີ",
      "zh": "账户维护和服务的月费"
    },
    "amt_lak": 50000.00,
    "amt_usd": 5.00,
    "amt_thb": 150.00,
    "amt_cny": 35.00,
    "amt_vnd": 115000.00,
    "amt_rub": 450.00,
    "created_at": "2025-10-09 10:00:00",
    "updated_at": "2025-10-09 10:00:00"
  }
}
```

### Update Fee Charge

Update an existing fee charge.

**Endpoint:** `PUT /v1/api/fee-charge`

**Request Body:**
```json
{
  "fee_id": 1,
  "fee_category": "account",
  "fee_type": {
    "en": "Updated Monthly Account Fee",
    "lo": "ຄ່າບໍລິການບັນຊີລາຍເດືອນ (ອັບເດດ)",
    "zh": "月账户费（更新）"
  },
  "description": {
    "en": "Updated monthly fee for account maintenance",
    "lo": "ຄ່າທຳນຽມລາຍເດືອນອັບເດດສຳລັບການບໍລິການບັນຊີ",
    "zh": "更新的账户维护月费"
  },
  "amt_lak": 60000.00,
  "amt_usd": 6.00,
  "amt_thb": 180.00,
  "amt_cny": 40.00,
  "amt_vnd": 138000.00,
  "amt_rub": 540.00
}
```

**Response:**
```json
{
  "code": "00",
  "msg": "updated",
  "data": null
}
```

### Delete Fee Charge

Delete a fee charge.

**Endpoint:** `DELETE /v1/api/fee-charge/:id`

**Example:** `DELETE /v1/api/fee-charge/1`

**Response:**
```json
{
  "code": "00",
  "msg": "deleted",
  "data": null
}
```

### List Fee Charges

Retrieve a paginated list of fee charges.

**Endpoint:** `GET /v1/api/fee-charges`

**Query Parameters:**
- `limit` (optional): Number of items per page (default: 20)
- `offset` (optional): Pagination offset (default: 0)
- `category` (optional): Filter by category ("account", "loan", "remittance", "card", "transfer", "other")

**Example - Get all account fees:** `GET /v1/api/fee-charges?category=account`

**Example - Get all loan fees:** `GET /v1/api/fee-charges?category=loan`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "total": 25,
    "fee_charges": [
      {
        "fee_id": 1,
        "fee_category": "account",
        "fee_type": {
          "en": "Monthly Account Maintenance Fee",
          "lo": "ຄ່າບໍລິການບັນຊີລາຍເດືອນ",
          "zh": "月账户维护费"
        },
        "description": {
          "en": "Monthly fee for account maintenance and services",
          "lo": "ຄ່າທຳນຽມລາຍເດືອນສຳລັບການບໍລິການບັນຊີ",
          "zh": "账户维护和服务的月费"
        },
        "amt_lak": 50000.00,
        "amt_usd": 5.00,
        "amt_thb": 150.00,
        "amt_cny": 35.00,
        "amt_vnd": 115000.00,
        "amt_rub": 450.00,
        "created_at": "2025-10-09 10:00:00",
        "updated_at": "2025-10-09 10:00:00"
      }
    ]
  }
}
```

**Fee Categories:**
- `account` - Account-related fees
- `loan` - Loan-related fees
- `remittance` - Remittance/transfer fees
- `card` - Card-related fees
- `transfer` - Transfer fees
- `other` - Other miscellaneous fees

**Supported Currencies:**
- `LAK` - Lao Kip
- `USD` - US Dollar
- `THB` - Thai Baht
- `CNY` - Chinese Yuan
- `VND` - Vietnamese Dong
- `RUB` - Russian Ruble

---

## Languages API

Manage available languages for multilingual content. Languages are used to control which language versions of content are available and which is the default.

### Create Language

Add a new language to the system.

**Endpoint:** `POST /v1/api/languages`

**Request Body:**
```json
{
  "lang_code": "en",
  "lang_name": "English",
  "is_default": true
}
```

**Field Descriptions:**
- `lang_code` (string, required) - 1-2 character language code (e.g., "en", "lo", "th")
- `lang_name` (string, required) - Display name of the language
- `is_default` (boolean, optional) - Whether this is the default language (default: false)

**Response:**
```json
{
  "code": "00",
  "msg": "created",
  "data": {
    "lang_code": "en",
    "lang_name": "English",
    "is_default": true
  }
}
```

### Get Language by Code

Retrieve a specific language by its code.

**Endpoint:** `GET /v1/api/languages/:code`

**Path Parameters:**
- `code` - Language code (e.g., "en", "lo")

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "lang_code": "en",
    "lang_name": "English",
    "is_default": true
  }
}
```

### Update Language

Update an existing language's information.

**Endpoint:** `PUT /v1/api/languages/:code`

**Path Parameters:**
- `code` - Language code to update

**Request Body:**
```json
{
  "lang_name": "English (US)",
  "is_default": true
}
```

**Note:** The `lang_code` cannot be changed. To change the code, delete and create a new language.

**Response:**
```json
{
  "code": "00",
  "msg": "updated",
  "data": {
    "lang_code": "en",
    "lang_name": "English (US)",
    "is_default": true
  }
}
```

### Delete Language

Remove a language from the system.

**Endpoint:** `DELETE /v1/api/languages/:code`

**Path Parameters:**
- `code` - Language code to delete

**Response:**
```json
{
  "code": "00",
  "msg": "deleted"
}
```

**Important:** Deleting a language that is referenced in multilingual content (news, announcements, etc.) may cause issues. Ensure all content is updated before deleting a language.

### List All Languages

Retrieve all available languages in the system.

**Endpoint:** `GET /v1/api/languages`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "total": 2,
    "languages": [
      {
        "lang_code": "en",
        "lang_name": "English",
        "is_default": true
      },
      {
        "lang_code": "lo",
        "lang_name": "Lao",
        "is_default": false
      }
    ]
  }
}
```

**Note:** Languages are ordered with the default language first, then alphabetically by language code.

### Usage in Multilingual Content

Languages defined in this table are used across the API for multilingual content:

**Example: Creating News with Multiple Languages**
```json
{
  "title_text": {
    "en": "Breaking News Title",
    "lo": "ຫົວຂໍ່ຂ່າວສຳຄັນ"
  },
  "content_text": {
    "en": "English content here...",
    "lo": "ເນື້ອຫາພາສາລາວ..."
  }
}
```

**Admin Portal Use Case:**

The admin portal can use the `GET /v1/api/languages` endpoint to:
1. Get a count of available languages
2. Dynamically generate input fields for each language
3. Validate that content is provided for all active languages
4. Set the default language for content display

**Example Frontend Implementation:**
```javascript
// Fetch available languages
const response = await fetch('http://localhost:8080/v1/api/languages');
const result = await response.json();
const languages = result.data.languages;

// Create input fields for each language
languages.forEach(lang => {
  createInputField(`title_${lang.lang_code}`, lang.lang_name);
  createInputField(`content_${lang.lang_code}`, lang.lang_name);
});

// Build multilingual JSON object
const newsData = {
  title_text: {},
  content_text: {}
};
languages.forEach(lang => {
  newsData.title_text[lang.lang_code] = getInputValue(`title_${lang.lang_code}`);
  newsData.content_text[lang.lang_code] = getInputValue(`content_${lang.lang_code}`);
});
```

---

## Template Markdown API

Manage reusable markdown templates with multilingual support. Templates can be used for consistent formatting across different content types like emails, notifications, or content blocks.

### Create Template

Create a new markdown template.

**Endpoint:** `POST /v1/api/template`

**Request Body:**
```json
{
  "template_name": "welcome_email",
  "template_content": {
    "en": "# Welcome to BIC Bank\n\nDear Customer,\n\nThank you for choosing us...",
    "lo": "# ຍິນດີຕ້ອນຮັບສູ່ທະນາຄານ BIC\n\nລູກຄ້າທີ່ເຄົາລົບ,\n\nຂອບໃຈທີ່ເລືອກພວກເຮົາ..."
  }
}
```

**Field Descriptions:**
- `template_name` (string, required) - Unique identifier for the template (max 50 chars)
- `template_content` (object, required) - JSONB object with language codes as keys and markdown content as values

**Response:**
```json
{
  "code": "00",
  "msg": "created",
  "data": null
}
```

### Get Template by ID

Retrieve a specific template.

**Endpoint:** `GET /v1/api/template/:id`

**Query Parameters:**
- `lang` (optional): Language code (default: "en")

**Example:** `GET /v1/api/template/1?lang=en`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "template_id": 1,
    "template_name": "welcome_email",
    "template_content": "# Welcome to BIC Bank\n\nDear Customer,\n\nThank you for choosing us...",
    "created_at": "2025-10-03 10:00:00",
    "updated_at": "2025-10-03 10:00:00"
  }
}
```

**Note:** The `template_content` field returns the localized string for the specified language, not the full JSONB object.

### Update Template

Update an existing template.

**Endpoint:** `PUT /v1/api/template`

**Request Body:**
```json
{
  "template_id": 1,
  "template_name": "welcome_email_v2",
  "template_content": {
    "en": "# Welcome to BIC Bank!\n\nDear Valued Customer,\n\nWe're thrilled to have you...",
    "lo": "# ຍິນດີຕ້ອນຮັບສູ່ທະນາຄານ BIC!\n\nລູກຄ້າທີ່ມີຄ່າ,\n\nພວກເຮົາດີໃຈທີ່ມີທ່ານ...",
    "th": "# ยินดีต้อนรับสู่ธนาคาร BIC!\n\nเรียนลูกค้าผู้มีค่า,\n\nเรายินดีที่มีคุณ..."
  }
}
```

**Response:**
```json
{
  "code": "00",
  "msg": "updated",
  "data": null
}
```

### Delete Template

Delete a template.

**Endpoint:** `DELETE /v1/api/template/:id`

**Example:** `DELETE /v1/api/template/1`

**Response:**
```json
{
  "code": "00",
  "msg": "deleted",
  "data": null
}
```

### List Templates

Retrieve a paginated list of templates.

**Endpoint:** `GET /v1/api/templates`

**Query Parameters:**
- `limit` (optional): Number of items per page (default: 20)
- `offset` (optional): Pagination offset (default: 0)
- `lang` (optional): Language code (default: "en")

**Example:** `GET /v1/api/templates?limit=10&offset=0&lang=en`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "total": 15,
    "templates": [
      {
        "template_id": 1,
        "template_name": "welcome_email",
        "template_content": "# Welcome to BIC Bank\n\nDear Customer...",
        "created_at": "2025-10-03 10:00:00",
        "updated_at": "2025-10-03 10:00:00"
      },
      {
        "template_id": 2,
        "template_name": "account_confirmation",
        "template_content": "# Account Confirmation\n\nYour account has been created...",
        "created_at": "2025-10-03 11:30:00",
        "updated_at": "2025-10-03 11:30:00"
      }
    ]
  }
}
```

**Note:** Templates are ordered alphabetically by `template_name`, then by creation date (newest first).

### Get Template by ID (All Languages)

Retrieve a specific template with all language data in JSONB format.

**Endpoint:** `GET /v1/api/template/:id/all-lang`

**Example:** `GET /v1/api/template/1/all-lang`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "template_id": 1,
    "template_name": "welcome_email",
    "template_content": {
      "en": "# Welcome to BIC Bank\n\nDear Customer,\n\nThank you for choosing us...",
      "lo": "# ຍິນດີຕ້ອນຮັບສູ່ທະນາຄານ BIC\n\nລູກຄ້າທີ່ເຄົາລົບ,\n\nຂອບໃຈທີ່ເລືອກພວກເຮົາ...",
      "th": "# ยินดีต้อนรับสู่ธนาคาร BIC\n\nเรียนลูกค้า,\n\nขอบคุณที่เลือกเรา..."
    },
    "created_at": "2025-10-03 10:00:00",
    "updated_at": "2025-10-03 10:00:00"
  }
}
```

**Use Case:** This endpoint is useful for admin panels where you need to edit all language versions of a template simultaneously.

### List Templates (All Languages)

Retrieve a paginated list of templates with all language data.

**Endpoint:** `GET /v1/api/templates/all-lang`

**Query Parameters:**
- `limit` (optional): Number of items per page (default: 20)
- `offset` (optional): Pagination offset (default: 0)

**Example:** `GET /v1/api/templates/all-lang?limit=10&offset=0`

**Response:**
```json
{
  "code": "00",
  "msg": "success",
  "data": {
    "total": 15,
    "templates": [
      {
        "template_id": 1,
        "template_name": "welcome_email",
        "template_content": {
          "en": "# Welcome to BIC Bank\n\nDear Customer...",
          "lo": "# ຍິນດີຕ້ອນຮັບສູ່ທະນາຄານ BIC\n\nລູກຄ້າທີ່ເຄົາລົບ...",
          "th": "# ยินดีต้อนรับสู่ธนาคาร BIC\n\nเรียนลูกค้า..."
        },
        "created_at": "2025-10-03 10:00:00",
        "updated_at": "2025-10-03 10:00:00"
      }
    ]
  }
}
```

### Template Use Cases

**Email Templates:**
```json
{
  "template_name": "password_reset",
  "template_content": {
    "en": "# Password Reset Request\n\nClick the link below to reset your password:\n\n[Reset Password]({{reset_link}})",
    "lo": "# ຄຳຮ້ອງຂໍຣີເຊັດລະຫັດຜ່ານ\n\nກົດລິ້ງຂ້າງລຸ່ມເພື່ອຣີເຊັດລະຫັດຜ່ານຂອງທ່ານ:\n\n[ຣີເຊັດລະຫັດຜ່ານ]({{reset_link}})"
  }
}
```

**Notification Templates:**
```json
{
  "template_name": "transaction_alert",
  "template_content": {
    "en": "**Transaction Alert**\n\nAmount: {{amount}} {{currency}}\nDate: {{date}}\nBalance: {{balance}}",
    "lo": "**ແຈ້ງເຕືອນການເຄື່ອນໄຫວ**\n\nຈຳນວນ: {{amount}} {{currency}}\nວັນທີ: {{date}}\nຍອດເງິນ: {{balance}}"
  }
}
```

**Content Block Templates:**
```json
{
  "template_name": "footer_disclaimer",
  "template_content": {
    "en": "---\n\n*This is an automated message. Please do not reply.*\n\n© 2025 BIC Bank. All rights reserved.",
    "lo": "---\n\n*ນີ້ແມ່ນຂໍ້ຄວາມອັດຕະໂນມັດ. ກະລຸນາຢ່າຕອບກັບ.*\n\n© 2025 ທະນາຄານ BIC. ສະຫງວນລິຂະສິດທັງໝົດ."
  }
}
```

### Markdown Support

Templates support standard Markdown syntax:
- **Headers:** `# H1`, `## H2`, `### H3`
- **Bold:** `**bold text**`
- **Italic:** `*italic text*`
- **Links:** `[text](url)`
- **Lists:** `- item` or `1. item`
- **Code:** `` `code` `` or ` ```code block``` `
- **Line breaks:** `\n`

### Variable Substitution

While the API stores raw markdown templates, your application can implement variable substitution using placeholders like `{{variable_name}}`. The API does not perform substitution - this is handled by your email service or notification system.

**Example workflow:**
1. Fetch template: `GET /v1/api/template/1?lang=en`
2. Get template content: `"Welcome {{customer_name}}!"`
3. Replace variables: `"Welcome John Doe!"`
4. Convert markdown to HTML (if needed)
5. Send email/notification

---

## Media Management API

The API provides endpoints for uploading, listing, and serving media files (images, videos, forms/documents).

### Media Categories

The system supports three media categories:
- **images** - Image files (jpg, png, gif, etc.)
- **videos** - Video files (mp4, avi, mov, etc.)
- **forms** - Documents and forms (pdf, docx, xlsx, etc.)

### Upload Media with Database Persistence

Upload a file and save its metadata to the database. Optionally link it to content.

**Endpoint:** `POST /media/upload/:category`

**Path Parameters:**
- `category`: One of "images", "videos", or "forms"

**Request:**
- Content-Type: `multipart/form-data`

**Form Fields:**
- `file` (required) - The file to upload
- `content_type` (optional) - Type of content: "news", "product", "promotion", "form_download", etc.
- `content_id` (optional) - ID of the content item (required if content_type is provided)
- `role` (optional) - Role of the media: "thumbnail", "gallery", "document", "header", "primary", etc.
- `media_type` (optional) - Media type override: "image", "video", "document", "misc"

**Example - Simple upload (no linking):**
```bash
curl -X POST http://localhost:8080/media/upload/forms \
  -F "file=@/path/to/application-form.pdf"
```

**Response (without linking):**
```json
{
  "status": "success",
  "category": "forms",
  "filename": "application-form.pdf",
  "size": 245678,
  "url": "/media/forms/application-form.pdf",
  "media_id": 123,
  "media_type": "document",
  "file_path": "/media/forms/application-form.pdf",
  "file_extension": "pdf"
}
```

**Example - Upload with content linking:**
```bash
curl -X POST http://localhost:8080/media/upload/images \
  -F "file=@/path/to/header.jpg" \
  -F "content_type=news" \
  -F "content_id=1" \
  -F "role=header"
```

**Response (with linking):**
```json
{
  "status": "success",
  "category": "images",
  "filename": "header.jpg",
  "size": 245678,
  "url": "/media/images/header.jpg",
  "media_id": 123,
  "media_type": "image",
  "file_path": "/media/images/header.jpg",
  "file_extension": "jpg",
  "link_id": 456,
  "content_type": "news",
  "content_id": 1,
  "role": "header"
}
```

**Key Changes:**
- File metadata is **always saved** to the `media` table
- `content_type`, `content_id`, and `role` are now **optional**
- If `content_type` and `content_id` are provided, a record is also created in the `media_link` table
- If only uploading without linking to content, just send the `file` parameter

**Error Responses:**

Missing file:
```json
{
  "error": "file is required"
}
```

Invalid category:
```json
{
  "error": "invalid category"
}
```

Invalid content_id (when provided):
```json
{
  "error": "content_id must be a positive integer"
}
```

### Alternative Upload Endpoint

Upload a file using category as a form parameter.

**Endpoint:** `POST /upload`

**Request:**
- Content-Type: `multipart/form-data`

**Form Fields:**
- `file` (required) - The file to upload
- `category` (required) - Media category: "images", "videos", or "forms"
- `content_type` (optional) - Type of content: "news", "product", "promotion", "form_download", etc.
- `content_id` (optional) - ID of the content item
- `role` (optional) - Role of the media: "thumbnail", "gallery", "document", "header", etc.
- `media_type` (optional) - Media type override: "image", "video", "document", "misc"

**Example:**
```bash
curl -X POST http://localhost:8080/upload \
  -F "file=@/path/to/header.jpg" \
  -F "category=images" \
  -F "content_type=news" \
  -F "content_id=1" \
  -F "role=header"
```

### List All Media Files

Retrieve a list of all uploaded media files, with optional filters.

**Endpoint:** `GET /media/files`

**Query Parameters:**
- `category` (optional) - Filter by category: "forms", "images", or "videos"
- `media_type` (optional) - Filter by media type: "document", "image", "video", or "misc"

**Example - Get all files:**
```bash
curl http://localhost:8080/media/files
```

**Example - Get all forms:**
```bash
curl http://localhost:8080/media/files?category=forms
```

**Example - Get all images:**
```bash
curl http://localhost:8080/media/files?category=images
```

**Example - Get all documents (regardless of category):**
```bash
curl http://localhost:8080/media/files?media_type=document
```

**Example - Combined filter:**
```bash
curl http://localhost:8080/media/files?category=images&media_type=image
```

**Response:**
```json
{
  "status": "success",
  "count": 15,
  "data": [
    {
      "media_id": 10,
      "file_name": "application-form.pdf",
      "file_path": "/media/forms/application-form.pdf",
      "media_type": "document",
      "file_extension": "pdf",
      "uploaded_at": "2025-10-03T10:30:00Z"
    },
    {
      "media_id": 9,
      "file_name": "loan-form.pdf",
      "file_path": "/media/forms/loan-form.pdf",
      "media_type": "document",
      "file_extension": "pdf",
      "uploaded_at": "2025-10-02T14:20:00Z"
    }
  ]
}
```

**Notes:**
- Results are ordered by most recent upload first (`uploaded_at DESC`)
- Returns all files if no filters are provided
- Invalid category values will return an error

### Get Single Media File by ID

Retrieve metadata for a specific media file.

**Endpoint:** `GET /media/files/:id`

**Path Parameters:**
- `id` - The media_id of the file

**Example:**
```bash
curl http://localhost:8080/media/files/10
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "media_id": 10,
    "file_name": "application-form.pdf",
    "file_path": "/media/forms/application-form.pdf",
    "media_type": "document",
    "file_extension": "pdf",
    "uploaded_at": "2025-10-03T10:30:00Z"
  }
}
```

**Error Response (not found):**
```json
{
  "error": "media file not found"
}
```

### Serve Media Files

Access uploaded media files via static routes.

**Images:**
- **Endpoint:** `GET /media/images/:filename`
- **Example:** `http://localhost:8080/media/images/header.jpg`

**Videos:**
- **Endpoint:** `GET /media/videos/:filename`
- **Example:** `http://localhost:8080/media/videos/intro.mp4`

**Forms/Documents:**
- **Endpoint:** `GET /media/forms/:filename`
- **Example:** `http://localhost:8080/media/forms/loan-application.pdf`

**Response:**
- Returns the actual file with appropriate Content-Type headers
- Supports browser rendering for images/videos
- Supports download for documents

### Media File Naming

The system automatically sanitizes filenames:
- Removes special characters
- Replaces spaces with underscores
- Ensures unique filenames (adds `-1`, `-2`, etc. for duplicates)
- Preserves file extensions

**Example transformations:**
- `My Photo (2024).jpg` → `My_Photo_2024.jpg`
- `Document!@#.pdf` → `Document.pdf`
- If `file.jpg` exists, next upload becomes `file-1.jpg`

### Environment Variables

Configure custom media directories:

```bash
# Base directory for all media (default: ./media)
MEDIA_BASE_DIR=/var/www/media

# Individual category directories (optional)
MEDIA_IMAGES_DIR=/var/www/media/images
MEDIA_VIDEOS_DIR=/var/www/media/videos
MEDIA_FORMS_DIR=/var/www/media/forms
```

### Database Schema

**media table:**
```sql
CREATE TABLE media (
    media_id SERIAL PRIMARY KEY,
    file_name VARCHAR(255) NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    media_type VARCHAR(50) NOT NULL,
    file_extension VARCHAR(10),
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**media_link table:**
```sql
CREATE TABLE media_link (
    link_id SERIAL PRIMARY KEY,
    media_id INT NOT NULL,
    content_type VARCHAR(50),
    content_id INT NOT NULL,
    role VARCHAR(50),
    FOREIGN KEY (media_id) REFERENCES media(media_id) ON DELETE CASCADE
);
```

### Usage Examples

**Upload news header image:**
```bash
curl -X POST http://localhost:8080/upload \
  -F "file=@news-header.jpg" \
  -F "category=images" \
  -F "content_type=news" \
  -F "content_id=5" \
  -F "role=header"
```

**Upload product gallery image:**
```bash
curl -X POST http://localhost:8080/upload \
  -F "file=@product-photo.jpg" \
  -F "category=images" \
  -F "content_type=product" \
  -F "content_id=10" \
  -F "role=gallery"
```

**Upload downloadable form:**
```bash
curl -X POST http://localhost:8080/upload \
  -F "file=@application-form.pdf" \
  -F "category=forms" \
  -F "content_type=form" \
  -F "content_id=3" \
  -F "role=document"
```

**Quick upload without database:**
```bash
# Just get the URL quickly
curl -X POST http://localhost:8080/media/upload/images \
  -F "file=@banner.jpg"
```

---

## Background Schedulers

### Exchange Rate Auto-Update Scheduler

The API includes an automated background scheduler that updates exchange rates from the IBS system.

#### Schedule Times

The scheduler runs automatically at:
- **01:00 AM** (Local Time) - Daily morning update
- **01:00 PM** (13:00, Local Time) - Daily afternoon update

#### How It Works

1. **At startup:** The scheduler calculates the next run time
2. **Waits:** Until the scheduled time arrives
3. **Executes:** Calls the UpdateExchangeRates service
4. **Logs:** Records success/failure in application logs
5. **Repeats:** Schedules the next run time

#### Scheduler Logs

**Startup:**
```
Next exchange rate update scheduled at: 2025-10-03T13:00:00+07:00
```

**Successful update:**
```
Scheduled UpdateExchangeRates succeeded; updated pairs=8
```

**Failed update:**
```
Scheduled UpdateExchangeRates failed: connection timeout
```

**Graceful shutdown:**
```
Exchange rate scheduler stopped
```

#### Manual Override

You can still manually trigger updates via the API:

```bash
curl -X POST http://localhost:8080/v1/api/exchange-rates \
  -H "Content-Type: application/json" \
  -d '{"date": "2025-10-03"}'
```

#### Context Cancellation

The scheduler respects context cancellation for graceful shutdown:
- Listens for application shutdown signals
- Stops scheduling new updates
- Allows current update to complete
- Logs shutdown confirmation

#### Implementation Details

**File:** `internal/scheduler/exchange_rate_scheduler.go`

**Key Features:**
- Non-blocking goroutine execution
- Context-aware for graceful shutdown
- Automatic rescheduling after each run
- Handles timezone-aware scheduling
- Error logging without crashing

**Started in:** `cmd/portal/main.go`
```go
schedCtx, cancel := context.WithCancel(context.Background())
defer cancel()
go scheduler.RunExchangeRateScheduler(schedCtx, apiService)
```

#### Customization

To modify schedule times, edit `exchange_rate_scheduler.go`:

```go
runTimes := []time.Time{
    time.Date(now.Year(), now.Month(), now.Day(), 1, 0, 0, 0, now.Location()),   // 01:00 AM
    time.Date(now.Year(), now.Month(), now.Day(), 13, 0, 0, 0, now.Location()),  // 01:00 PM
}
```

Change the hour values (1, 13) to your preferred times.

---

## Notes

### Multilingual Fields

The following entities support multilingual content via JSONB fields:
- **News**: `title_text`, `slug_text`, `content_text`
- **Promotions**: `title_text`, `slug_text`, `content_text`
- **Products**: `title_text`, `slug_text`, `content_text`
- **Announcements**: `title_text`, `content_text`
- **Interest Rates**: `interest_type`
- **Templates**: `template_content`
- **Form Downloads**: `title`, `description`, `file_url` *(NEW)*
- **Locations**: `location_name`, `location_address` *(NEW)*
- **Fee & Charges**: `fee_type`, `description` *(NEW)*

When creating/updating these entities, provide language-specific values:
```json
{
  "title_text": {
    "en": "English Title",
    "lo": "ຫົວຂໍ້ພາສາລາວ"
  }
}
```

When retrieving, use the `lang` query parameter to get the specific language version.

### JSONB Contact Fields

The following entities use JSONB for flexible contact information:
- **Locations**: `phone` (tel1, tel2, ...), `email` (email1, email2, ...)

Example:
```json
{
  "phone": {
    "tel1": "+856 21 123456",
    "tel2": "+856 21 123457"
  },
  "email": {
    "email1": "main@example.com",
    "email2": "support@example.com"
  }
}
```

### All-Language Endpoints

For admin panels, content management systems, and translation tools, special "all-lang" endpoints are available that return complete JSONB objects with all language versions:

**Available All-Language Endpoints:**

| Entity | Single Item | List |
|--------|-------------|------|
| News | `GET /v1/api/news/:id/all-lang` | `GET /v1/api/news/all-lang/list` |
| Products | `GET /v1/api/product/:id/all-lang` | `GET /v1/api/products/all-lang` |
| Promotions | `GET /v1/api/promo/:id/all-lang` | `GET /v1/api/promos/all-lang` |
| Announcements | `GET /v1/api/announcement/:id/all-lang` | `GET /v1/api/announcements/all-lang` |
| Interest Rates | N/A | `GET /v1/api/interests/all-lang` |
| Templates | `GET /v1/api/template/:id/all-lang` | `GET /v1/api/templates/all-lang` |
| Form Downloads | N/A | `GET /v1/api/form-downloads/all-lang` *(NEW)* |

**Key Differences:**
- **Regular endpoints** (with `?lang=en`): Return extracted string values for a single language
- **All-lang endpoints**: Return complete JSONB objects with all available languages

**Example Comparison:**

Regular endpoint (`GET /v1/api/news/1?lang=en`):
```json
{
  "title_text": "Breaking News"  // String
}
```

All-lang endpoint (`GET /v1/api/news/1/all-lang`):
```json
{
  "title_text": {  // JSONB Object
    "en": "Breaking News",
    "lo": "ຂ່າວດ່ວນ",
    "th": "ข่าวด่วน"
  }
}
```

**Use Cases:**
- Building admin interfaces with multi-language input forms
- Content translation workflows
- Exporting all content for backup or migration
- Multi-language preview features
- Content synchronization across languages

### Pagination

Most list endpoints support pagination:
- `limit`: Number of records per page (default: 20)
- `offset`: Starting position (default: 0)

Example: `?limit=10&offset=20` retrieves records 21-30.

### Status Values

Different entities use different status values:
- **News/Promotions/Products**: "draft", "published", "disabled"
- **Image Sliders**: "active", "inactive"
- **Announcements**: "active", "inactive"
- **Form Downloads**: "active", "inactive"
- **Organization Chart**: "Y" (yes), "N" (no) for `usage_status`

### Filter Parameters

Many list endpoints support the following common filters:
- **status**: Filter by status value (varies by entity)
- **limit**: Number of records per page (default: 20)
- **offset**: Starting position for pagination (default: 0)
- **lang**: Language code for multilingual content (default: "en")
- **group_id**: Filter by group/category (Form Downloads, Locations)
- **category**: Filter by category (Fee & Charges)
- **file_type**: Filter by file type (Form Downloads)
- **file_year**: Filter by year (Form Downloads)

---

## Contact & Support

For API support, please contact:
- **Email:** sitouthay@biclaos.com
- **Documentation:** sitouthay@biclaos.com

---

**Last Updated:** October 9, 2025  
**API Version:** 1.0.16
