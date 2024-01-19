
## users
```sql
CREATE TABLE users(
    
    id                      SERIAL NOT NULL,
    name                    VARCHAR(255),  
    email                   VARCHAR(255),
    phone                   VARCHAR(255),
    password                VARCHAR(255),
    resetPasswordToken      VARCHAR(255),
    resetPasswordExpire     VARCHAR(255),
    role:                   VARCHAR(255),
    status                  VARCHAR(255),

    created_at              TIMESTAMP WITH TIME ZONE,
    updated_at              TIMESTAMP WITH TIME ZONE,
  
  CONSTRAINT users_pkey PRIMARY KEY (id));
```

## bootcamp
```sql
CREATE TABLE bootcamps(
  id                        SERIAL NOT NULL,
  name                     VARCHAR(255),
  website                   VARCHAR(255),
  address                   VARCHAR(255),
  location:                 VARCHAR(255),
  slug                      VARCHAR(255),
  description                      VARCHAR(255),

  created_at              TIMESTAMP WITH TIME ZONE,
  updated_at              TIMESTAMP WITH TIME ZONE,

  CONSTRAINT bootcamps_pkey PRIMARY KEY (id)
)
```


























<!-- ....................start..................... -->

## departments
````sql
CREATE TABLE departments (
  id                  SERIAL NOT NULL,
  name                VARCHAR(255),
  description         VARCHAR(255),
  is_active           BOOLEAN,

  created_at              TIMESTAMP WITH TIME ZONE,
  updated_at              TIMESTAMP WITH TIME ZONE,


  CONSTRAINT  departments_pkey  PRIMARY KEY(id)
)

````


## designations
````sql
CREATE TABLE designations (
  id                  SERIAL NOT NULL,
  name                VARCHAR(255),
  type                VARCHAR(255),
  description         VARCHAR(255),
  is_active           BOOLEAN,

  created_at              TIMESTAMP WITH TIME ZONE,
  updated_at              TIMESTAMP WITH TIME ZONE,


  CONSTRAINT  designations_pkey  PRIMARY KEY(id)
)

````



## Staffattendance
````sql
CREATE TABLE staff_attendances (
  id                  SERIAL NOT NULL,
  staff_id            INTEGER,
  date                DATE,
  note                VARCHAR(255),
  status              VARCHAR(255),

  is_active           BOOLEAN,

  created_at              TIMESTAMP WITH TIME ZONE,
  updated_at              TIMESTAMP WITH TIME ZONE,


  CONSTRAINT  staff_attendances_pkey  PRIMARY KEY(id)
)

````

## Salaries
````sql
CREATE TABLE salaries (
  id                  SERIAL NOT NULL,
  staff_id            INTEGER,
  date                DATE,
  type                VARCHAR(255),
  amount              NUMERIC(15,2),

  created_at              TIMESTAMP WITH TIME ZONE,
  updated_at              TIMESTAMP WITH TIME ZONE,


  CONSTRAINT  salaries_pkey  PRIMARY KEY(id)
)

````

## Payrolls
````sql
CREATE TABLE payrolls (
  id                  SERIAL NOT NULL,
  basic_salary        NUMERIC(15,2),
  earning             NUMERIC(15,2),
  deduction           NUMERIC(15,2),
  status              VARCHAR(255),
  staff_id            INTEGER,
  payment_date        DATE,
  payment_mode        VARCHAR(255),
  month               DATE,
  note                VARCHAR(255),

  created_at              TIMESTAMP WITH TIME ZONE,
  updated_at              TIMESTAMP WITH TIME ZONE,


  CONSTRAINT  payrolls_pkey  PRIMARY KEY(id)
)
````
## Payroll_allowances
````sql
CREATE TABLE payroll_allowances (
  id                 SERIAL NOT NULL,
  name               VARCHAR(255),
  amount             NUMERIC(15,2),
  type               VARCHAR(255),
  payroll_id         INTEGER,

  created_at              TIMESTAMP WITH TIME ZONE,
  updated_at              TIMESTAMP WITH TIME ZONE,


  CONSTRAINT  payroll_allowances_pkey  PRIMARY KEY(id)
)
````


## leave type
````sql
CREATE TABLE leave_types (
  id                  SERIAL NOT NULL,
  name                VARCHAR(255),
  note                VARCHAR(255),
  is_active           BOOLEAN,

  created_at          TIMESTAMP WITH TIME ZONE,
  updated_at          TIMESTAMP WITH TIME ZONE,


  CONSTRAINT  leave_types_pkey  PRIMARY KEY(id)
)

````

## approve Leave
````sql
CREATE TABLE approve_leaves (
  id                  SERIAL NOT NULL,
  leave_type_id       INTEGER,
  type                VARCHAR(255),
  staff_id            INTEGER,
  apply_date          DATE,
  
  from_date           DATE,
  to_date             DATE,
  status              VARCHAR(255),
  reason              VARCHAR(255),

  created_at          TIMESTAMP WITH TIME ZONE,
  updated_at          TIMESTAMP WITH TIME ZONE,


  CONSTRAINT  approve_leaves_pkey  PRIMARY KEY(id)
)

````



## documents
````sql
CREATE TABLE documents (
  id                  SERIAL NOT NULL,
  name                VARCHAR(255),
  type                VARCHAR(255),
  staff_id            INTEGER,
  patient_id          INTEGER,
  description         VARCHAR(255),
  is_active           BOOLEAN,

  created_at              TIMESTAMP WITH TIME ZONE,
  updated_at              TIMESTAMP WITH TIME ZONE,


  CONSTRAINT  documents_pkey  PRIMARY KEY(id)
)

````
## users
````sql
CREATE TABLE users (
  id                  SERIAL NOT NULL,
  username            VARCHAR(255),
  password            VARCHAR(255),
  user_type           VARCHAR(255),
  staff_id            INTEGER,
  patient_id          INTEGER,
  member_id           INTEGER,
  is_active           BOOLEAN,

  created_at              TIMESTAMP WITH TIME ZONE,
  updated_at              TIMESTAMP WITH TIME ZONE,


  CONSTRAINT  users_pkey  PRIMARY KEY(id)
)

```

## user roles
````sql
CREATE TABLE user_roles (
  id                  SERIAL NOT NULL,
  user_id             INTEGER,
  role_id             INTEGER,

  created_at              TIMESTAMP WITH TIME ZONE,
  updated_at              TIMESTAMP WITH TIME ZONE,


  CONSTRAINT  user_roles_pkey  PRIMARY KEY(id)
)


## roles
````sql
CREATE TABLE roles (
  id                  SERIAL NOT NULL,
  name            VARCHAR(255),
  note            VARCHAR(255),
  is_active        BOOLEAN,

  created_at              TIMESTAMP WITH TIME ZONE,
  updated_at              TIMESTAMP WITH TIME ZONE,


  CONSTRAINT  roles_pkey  PRIMARY KEY(id)
)

````
## modules
````sql
CREATE TABLE modules (
  id                  SERIAL NOT NULL,
  name                VARCHAR(255),
  note                VARCHAR(255),
  add                 VARCHAR(255),
  edit                 VARCHAR(255),
  view                 VARCHAR(255),
  delete                 VARCHAR(255),

  created_at              TIMESTAMP WITH TIME ZONE,
  updated_at              TIMESTAMP WITH TIME ZONE,


  CONSTRAINT  modules_pkey  PRIMARY KEY(id)
)

````
## permissions
````sql
CREATE TABLE permissions (
  id                  SERIAL NOT NULL,
  role_id             INTEGER,
  module_id           INTEGER,
  add                 VARCHAR(255),
  view                VARCHAR(255),
  update              VARCHAR(255),
  delete              VARCHAR(255),

  created_at              TIMESTAMP WITH TIME ZONE,
  updated_at              TIMESTAMP WITH TIME ZONE,


  CONSTRAINT  permissions_pkey  PRIMARY KEY(id)
)

````
## staffs
````sql
CREATE TABLE staffs (
  id                  SERIAL NOT NULL,
  code                VARCHAR(255),
  name                VARCHAR(255),
  email               VARCHAR(255),                
  phone_no            VARCHAR(255),
  nid                 VARCHAR(255),
  nationality         VARCHAR(255),
  present_address     VARCHAR(255),
  permanent_address   VARCHAR(255),
  specialist          VARCHAR(255),
  designation_id      INTEGER,
  department_id       INTEGER,
  bio                 VARCHAR(255),
  dob                 VARCHAR(255),
  gender              VARCHAR(255),
  marital_status      VARCHAR(255),
  blood_type          VARCHAR(255),
  education           VARCHAR(255),
  photo               VARCHAR(255),
  signature           VARCHAR(255),
  religion            VARCHAR(255),
  experience          VARCHAR(255),
  joining_date        VARCHAR(255),
  leaving_date        VARCHAR(255),
  leaving_reason      VARCHAR(255),
  facebook_url        VARCHAR(255),
  instagram_url       VARCHAR(255),
  twitter_url         VARCHAR(255),
  linkedin_url        VARCHAR(255),
  bank_name           VARCHAR(255),
  branch_name         VARCHAR(255),
  ac_name             VARCHAR(255),
  ac_no               VARCHAR(255),
  note                VARCHAR(255),
  is_active           BOOLEAN,

  created_at              TIMESTAMP WITH TIME ZONE,
  updated_at              TIMESTAMP WITH TIME ZONE,


  CONSTRAINT  staffs_pkey  PRIMARY KEY(id)
)

````
## patients
```sql
CREATE TABLE patients(
  id                    SERIAL NOT NULL,
  code                  VARCHAR(255),
  type                  VARCHAR(255),
  name                  VARCHAR(255),
  email                 VARCHAR(255),
  phone_no              VARCHAR(255),
  blood_type            VARCHAR(255),
  gender                VARCHAR(255),
  marital_status        VARCHAR(255),
  age                   VARCHAR(255),
  dob                   VARCHAR(255),
  nid                   VARCHAR(255),
  nationality           VARCHAR(255),
  religion              VARCHAR(255),
  photo                 VARCHAR(255),
  present_address       VARCHAR(255),
  permanent_address     VARCHAR(255),

  is_active             BOOLEAN,

   created_at              TIMESTAMP WITH TIME ZONE,
   updated_at              TIMESTAMP WITH TIME ZONE,


  CONSTRAINT patients_pkey PRIMARY KEY(id)
)

```

## schedule
```sql
CREATE TABLE schedules(
  id                    SERIAL NOT NULL,
  staff_id              INTEGER,
  day                   VARCHAR(255),
  start_time            TIMESTAMP WITH TIME ZONE,,
  end_time              TIMESTAMP WITH TIME ZONE,,
  per_patient_time      INTEGER,
  max_patient           INTEGER,
  appointment_type      VARCHAR(255),
  is_active             BOOLEAN,

   created_at              TIMESTAMP WITH TIME ZONE,
   updated_at              TIMESTAMP WITH TIME ZONE,
   CONSTRAINT schedules_pkey PRIMARY KEY(id)
)

```


## appointments
```sql
  CREATE TABLE appointments (
    id                      SERIAL NOT NULL,
    patient_id              INTEGER,
    department_id           INTEGER,
    staff_id                INTEGER,
    schedule_id             INTEGER,
    date                    DATE,
    day                     INTEGER,
    serial_no               INTEGER,
    problem                 VARCHAR(255),
    is_active               BOOLEAN,

    created_at              TIMESTAMP WITH TIME ZONE,
    updated_at              TIMESTAMP WITH TIME ZONE,

  CONSTRAINT appointments_pkey PRIMARY KEY(id)
  )

```

## case_study_questions
```sql
  CREATE TABLE case_study_questions (
    id                            SERIAL NOT NULL,
    name                          VARCHAR(255),
    note                          VARCHAR(255),
    is_active                     BOOLEAN,

    created_at                    TIMESTAMP WITH TIME ZONE,
    updated_at                    TIMESTAMP WITH TIME ZONE,

  CONSTRAINT case_study_questions_pkey PRIMARY KEY(id)
  )

```




## case_studies
```sql
  CREATE TABLE case_studies (
    id                            SERIAL NOT NULL,
    department_id                 INTEGER,
    case_study_question_id        INTEGER,
    is_active                     BOOLEAN,

    created_at                    TIMESTAMP WITH TIME ZONE,
    updated_at                    TIMESTAMP WITH TIME ZONE,

  CONSTRAINT case_studies_pkey PRIMARY KEY(id)
  )

```

## patient_case_studies
```sql
  CREATE TABLE patient_case_studies (
    id                            SERIAL NOT NULL,
    patient_id                    INTEGER,
    department_id                 INTEGER,
    case_study_question_id        INTEGER,
    description                   VARCHAR(255),
    is_active                     BOOLEAN,

    created_at                    TIMESTAMP WITH TIME ZONE,
    updated_at                    TIMESTAMP WITH TIME ZONE,

  CONSTRAINT patient_case_studies_pkey PRIMARY KEY(id)
  )

```

## prescriptions
```sql
  CREATE TABLE prescriptions (
    id                            SERIAL NOT NULL,
    staff_id                      INTEGER,
    patient_id(appointment_id ata kroa ache)                   INTEGER,
    is_active                     BOOLEAN,
    
    created_at                    TIMESTAMP WITH TIME ZONE,
    updated_at                    TIMESTAMP WITH TIME ZONE,

  CONSTRAINT prescriptions_pkey PRIMARY KEY(id)
  )

```

## prescriptions_test
```sql
  CREATE TABLE prescriptions_tests (
    id                            SERIAL NOT NULL,
    prescription_id               INTEGER,
    name                          VARCHAR(255),

    created_at                    TIMESTAMP WITH TIME ZONE,
    updated_at                    TIMESTAMP WITH TIME ZONE,

  CONSTRAINT prescriptions_tests_pkey PRIMARY KEY(id)
  )

```

## prescription_medicin
```sql
  CREATE TABLE prescription_medicins (
    id                            SERIAL NOT NULL,
    prescription_id               INTEGER,
    name                          VARCHAR(255),
    qty                           INTEGER,
    unit                          VARCHAR(255),
    medicin_eat_roles             VARCHAR(255),
    
    created_at                    TIMESTAMP WITH TIME ZONE,
    updated_at                    TIMESTAMP WITH TIME ZONE,

  CONSTRAINT prescription_medicins_pkey PRIMARY KEY(id)
  )
```

## medicins
```sql
  CREATE TABLE medicins (
    id                            SERIAL NOT NULL,
    code                          VARCHAR(255),
    name                          VARCHAR(255),
    room_id                       INTEGER,
    cost                          INTEGER,
    note                          VARCHAR(255),
    is_active                     BOOLEAN,
    
    created_at                    TIMESTAMP WITH TIME ZONE,
    updated_at                    TIMESTAMP WITH TIME ZONE,

  CONSTRAINT medicins_pkey PRIMARY KEY(id)
  )

```

## tests 
```sql
CREATE TABLE tests (
  id                  SERIAL NOT NULL,
  code                VARCHAR(255),
  name                VARCHAR(255),
  building_id         INTEGER,
  room_id             INTEGER,
  cost                VARCHAR(255),
  note                VARCHAR(255),
  is_active           BOOLEAN,

   created_at                    TIMESTAMP WITH TIME ZONE,
   updated_at                    TIMESTAMP WITH TIME ZONE,

  CONSTRAINT tests_pkey PRIMARY KEY(id)
)

```

## building
```sql
CREATE TABLE buildings (
  id                  SERIAL NOT NULL,
  name                VARCHAR(255),
  note                VARCHAR(255),
  is_active           BOOLEAN,

  created_at                    TIMESTAMP WITH TIME ZONE,
  updated_at                    TIMESTAMP WITH TIME ZONE,

CONSTRAINT building_pkey PRIMARY KEY(id)
)
```

## rooms
```sql 
CREATE TABLE rooms (
  id                  SERIAL NOT NULL,
  name                VARCHAR(255),
  room_no             INTEGER,
  is_active           BOOLEAN,

  created_at          TIMESTAMP WITH TIME ZONE,
  updated_at          TIMESTAMP WITH TIME ZONE,

  CONSTRAINT rooms_pkey PRIMARY KEY(id)
)

```


## bed
```sql 
CREATE TABLE beds (
  id                  SERIAL NOT NULL,
  bed_no              INTEGER,
  type                VARCHAR(255),
  ward_id             INTEGER,
  cost                INTEGER,
  note                VARCHAR(255),
  is_active           BOOLEAN,

  created_at          TIMESTAMP WITH TIME ZONE,
  updated_at          TIMESTAMP WITH TIME ZONE,

  CONSTRAINT beds_pkey PRIMARY KEY(id)
)
```
## ward

```sql 
CREATE TABLE wards (
  id                  SERIAL NOT NULL,
  name                VARCHAR(255),
  department_id       INTEGER,
  note                VARCHAR(255),
  is_active           BOOLEAN,

  created_at          TIMESTAMP WITH TIME ZONE,
  updated_at          TIMESTAMP WITH TIME ZONE,

  CONSTRAINT wards_pkey PRIMARY KEY(id)
)
```

## patient register
```sql 
CREATE TABLE patient_registers (
  id                  SERIAL NOT NULL,
  patient_id          INTEGER,
  bed_id              INTEGER,
  bed_qty             INTEGER,
  package_id          INTEGER,
  service_id          INTEGER,
  start_date          DATE,
  note                VARCHAR(255),
  is_active           BOOLEAN,

  created_at          TIMESTAMP WITH TIME ZONE,
  updated_at          TIMESTAMP WITH TIME ZONE,

  CONSTRAINT patient_registers_pkey PRIMARY KEY(id)
)
```



## Bank
```sql 
CREATE TABLE banks(
  id                  SERIAL NOT NULL,
  name                VARCHAR(255),
  note                VARCHAR(255),
  is_active           BOOLEAN,

  created_at          TIMESTAMP WITH TIME ZONE,
  updated_at          TIMESTAMP WITH TIME ZONE,

CONSTRAINT banks_pkey PRIMARY KEY(id)
)
```
## account 
```sql
CREATE TABLE bank_accounts(
  id            SERIAL NOT NULL,
  date          VARCHAR(255),
  bank_id       INTEGER,
  brance_name    VARCHAR(255),
  balance        NUMERIC(15,2),
  ac_no         VARCHAR(255),
  ac_type       VARCHAR(255),

  ac_holder      VARCHAR(255),
  ac_holder_phone VARCHAR(255),
  is_active        BOOLEAN,

  created_at          TIMESTAMP WITH TIME ZONE,
  updated_at          TIMESTAMP WITH TIME ZONE,

CONSTRAINT bank_accounts_pkey PRIMARY KEY(id)
)
```

## banktransetion 
```sql
CREATE TABLE bank_transetions(
  id                SERIAL NOT NULL,
  date              DATE,
  type              VARCHAR(255),
  bank_account_id   INTEGER,
  amount            NUMERIC(15,2),
  slip_no           VARCHAR(255),
  
  created_at        TIMESTAMP WITH TIME ZONE,
  updated_at        TIMESTAMP WITH TIME ZONE,

CONSTRAINT bank_transetions_pkey PRIMARY KEY(id)
)
```


 #### Services 

  ## add Service
 ```sql
  CREATE TABLE services(
    id                SERIAL NOT NULL,
    name              VARCHAR(255),
    amount            NUMERIC(15,2),
    note              VARCHAR(255),
    is_active         BOOLEAN,

    created_at        TIMESTAMP WITH TIME ZONE,
    updated_at        TIMESTAMP WITH TIME ZONE,

  CONSTRAINT services_pkey PRIMARY KEY(id)
  )
 ```

   ## add Package
 ```sql
  CREATE TABLE packages(
    id                SERIAL NOT NULL,
    name              VARCHAR(255),
    discount          NUMERIC(15,2),
    discount_type     VARCHAR(255),
    is_active         BOOLEAN,

    created_at        TIMESTAMP WITH TIME ZONE,
    updated_at        TIMESTAMP WITH TIME ZONE,

  CONSTRAINT packages_pkey PRIMARY KEY(id)
  )
 ```
  ## Package Services
 ```sql
  CREATE TABLE package_services(

    id                SERIAL NOT NULL,
    package_id        INTEGER,
    service_id        INTEGER,
    qty               INTEGER,
    amount            NUMERIC(15,2),
    created_at        TIMESTAMP WITH TIME ZONE,
    updated_at        TIMESTAMP WITH TIME ZONE,

  CONSTRAINT package_services_pkey PRIMARY KEY(id)
  )
 ```



   ## Billing
 ```sql
  CREATE TABLE Billings(

    id                SERIAL NOT NULL,
    patient_id        INTEGER,
    package_id        INTEGER,
    date              DATE,
    gender            VARCHAR(255),

    price             NUMERIC(15,2),
    discount          NUMERIC(15,2),
    is_active         BOOLEAN,

  
    created_at        TIMESTAMP WITH TIME ZONE,
    updated_at        TIMESTAMP WITH TIME ZONE,

  CONSTRAINT Billings_pkey PRIMARY KEY(id)
  )
 ```

 ### Financial and accounting
  
  ## income Head
 ```sql
  CREATE TABLE income_heads(

    id                SERIAL NOT NULL,
    name              VARCHAR(255),
    note              VARCHAR(255),
   
    created_at        TIMESTAMP WITH TIME ZONE,
    updated_at        TIMESTAMP WITH TIME ZONE,

  CONSTRAINT income_heads_pkey PRIMARY KEY(id)
  )
 ```

  ## income
 ```sql
  CREATE TABLE incomes(

    id                SERIAL NOT NULL,
    income_head_id    INTEGER,
    amount            NUMERIC(15,2),
    name              VARCHAR(255),
    date              DATE,
    note              VARCHAR(255),

    created_at        TIMESTAMP WITH TIME ZONE,
    updated_at        TIMESTAMP WITH TIME ZONE,

  CONSTRAINT incomes_pkey PRIMARY KEY(id)
  )
 ```


  ## expense Head
 ```sql
  CREATE TABLE expense_heads(

    id                SERIAL NOT NULL,
    name              VARCHAR(255),
    note              VARCHAR(255),
   
    created_at        TIMESTAMP WITH TIME ZONE,
    updated_at        TIMESTAMP WITH TIME ZONE,

  CONSTRAINT expense_heads_pkey PRIMARY KEY(id)
  )
 ```

   ## expenses
 ```sql
  CREATE TABLE expenses(

    id                SERIAL NOT NULL,
    expense_head_id   INTEGER,
    amount            NUMERIC(15,2),
    name              VARCHAR(255),
    date              DATE,
    note              VARCHAR(255),

    created_at        TIMESTAMP WITH TIME ZONE,
    updated_at        TIMESTAMP WITH TIME ZONE,

  CONSTRAINT expenses_pkey PRIMARY KEY(id)
  )
 ```
  
  


 ### hospital activities

 ## add birth Report

 ```sql
  CREATE TABLE birth_reports(

    id                SERIAL NOT NULL,
    report_type       VARCHAR(255),
    name              VARCHAR(255),
    date              DATE,
    birth_time        TIMESTAMP WITH TIME ZONE,
    gender            VARCHAR(255),
    father_name       VARCHAR(255),
    mother_name       VARCHAR(255),
    nationality       VARCHAR(255),
    religion          VARCHAR(255),
    staff_id          INTEGER,
    address           VARCHAR(255),
    is_active         BOOLEAN,

    created_at        TIMESTAMP WITH TIME ZONE,
    updated_at        TIMESTAMP WITH TIME ZONE,

  CONSTRAINT birth_reports_pkey PRIMARY KEY(id)
  )
 ```

 ## add Death Report

 ```sql
  CREATE TABLE death_reports(

    id                SERIAL NOT NULL,
    patient_id        INTEGER,
    staff_id          INTEGER,
    father_name       VARCHAR(255),
    date_of_death     DATE,
    time_of_death     TIMESTAMP WITH TIME ZONE,
    description       VARCHAR(),
    is_active         BOOLEAN,

  
    created_at        TIMESTAMP WITH TIME ZONE,
    updated_at        TIMESTAMP WITH TIME ZONE,

  CONSTRAINT death_reports_pkey PRIMARY KEY(id)
  )
 ```

 ## investigation report

 ```sql
  CREATE TABLE investigation_reports(

    id                SERIAL NOT NULL,
    patient_id        INTEGER,
    date              DATE,
    staff_id         INTEGER,
    note              VARCHAR(255),
    is_active         BOOLEAN,
  
    created_at        TIMESTAMP WITH TIME ZONE,
    updated_at        TIMESTAMP WITH TIME ZONE,

  CONSTRAINT investigation_reports_pkey PRIMARY KEY(id)
  )
 ```


 ## oparation report

 ```sql
  CREATE TABLE operation_reports(

    id                SERIAL NOT NULL,
    patient_id        INTEGER,
    title             VARCHAR(255),
    date              DATE,
    staff_id          INTEGER,
    description       VARCHAR(255),

    is_active         BOOLEAN,
    created_at        TIMESTAMP WITH TIME ZONE,
    updated_at        TIMESTAMP WITH TIME ZONE,

  CONSTRAINT oparation_reports_pkey PRIMARY KEY(id)
  )
```

 ## notice boards 

 ```sql
  CREATE TABLE notice_boards(

    id                SERIAL NOT NULL,
    title             VARCHAR(255),
    person_type       VARCHAR(255),
    description       VARCHAR(255),
    start_date        DATE,
    end_date          DATE,
    is_active         BOOLEAN,
  
    created_at        TIMESTAMP WITH TIME ZONE,
    updated_at        TIMESTAMP WITH TIME ZONE,

  CONSTRAINT notice_boards_pkey PRIMARY KEY(id)
  )

  ```

  




-- ....................End.....................


