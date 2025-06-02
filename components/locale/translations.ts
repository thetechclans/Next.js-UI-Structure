export type Locale = "en" | "ar";

export type TranslationKey =
  | "search"
  | "search_placeholder"
  | "clear"
  | "previous"
  | "next"
  | "page"
  | "of"
  | "submit"
  | "cancel"
  | "close"
  | "success"
  | "error"
  | "info"
  | "warning"
  | "notification_title"
  | "notification_message"
  | "enter_otp"
  | "invalid_otp"
  | "language"
  | "english"
  | "arabic"
  | "ui_components_demo"
  | "buttons"
  | "cards"
  | "forms"
  | "tables"
  | "search_component"
  | "pagination_component"
  | "notification_component"
  | "otp_component"
  | "registration_form"
  | "enter_details"
  | "login_to_continue"
  | "full_name"
  | "email"
  | "password"
  | "confirm_password"
  | "register"
  | "email_privacy"
  | "passwords_not_match"
  | "invoices"
  | "status"
  | "method"
  | "amount"
  | "paid"
  | "pending"
  | "unpaid"
  // Dashboard
  | "dashboard"
  | "total_users"
  | "active_users"
  | "system_status"
  | "online"
  | "all_systems_operational"
  | "from_last_month"
  // Menu
  | "menu"
  | "Home"
  | "Request_to_join_Member"
  | "Beneficiary_Request"
  | "Financial_Management"
  | "Member_Management"
  | "store_management"
  | "Beneficiary_Management"
  | "Meeting_Management"
  | "Service_Management"
  | "Frequently_Asked_Question"
  | "Technical_Support"
  | "Membership"
  | "Vote"
  | "Common_Questions"
  | "Technical_Support"
  | "Available_services"
  | "My_Services"
  // User Management
  | "users"
  | "add_user"
  | "edit_user"
  | "delete_user"
  | "username"
  | "mobile"
  | "role"
  | "last_login"
  | "login"
  | "actions"
  | "active"
  | "inactive"
  | "edit"
  | "delete"
  | "loading"
  | "no_users_found"
  | "user_created"
  | "user_updated"
  | "user_deleted"
  | "error_fetching_users"
  | "error_deleting_user"
  | "search_users"
  | "username_required"
  | "email_required"
  | "invalid_email"
  | "password_required"
  | "password_too_short"
  | "mobile_required"
  | "leave_blank_to_keep_current"
  | "update"
  | "create"
  | "confirm_delete"
  | "delete_confirmation_message"
  // API Connection Error
  | "api_connection_error"
  | "api_connection_error_message"
  | "retry"
  | "troubleshooting"
  | "check_api_url"
  | "check_api_running"
  | "check_cors_settings"
  | "check_network_connection";

export const translations: Record<Locale, Record<TranslationKey, string>> = {
  en: {
    login_to_continue: "Login to continue",
    search: "Search",
    search_placeholder: "Search...",
    clear: "Clear",
    previous: "Previous",
    next: "Next",
    page: "Page",
    of: "of",
    submit: "Submit",
    cancel: "Cancel",
    close: "Close",
    success: "Success",
    error: "Error",
    info: "Information",
    warning: "Warning",
    notification_title: "Notification",
    notification_message: "This is a notification message",
    enter_otp: "Enter verification code",
    invalid_otp: "Invalid verification code",
    language: "Language",
    english: "English",
    arabic: "Arabic",
    ui_components_demo: "UI Components Demo",
    buttons: "Buttons",
    cards: "Cards",
    forms: "Forms",
    tables: "Tables",
    search_component: "Search Component",
    pagination_component: "Pagination Component",
    notification_component: "Notification Component",
    otp_component: "OTP Input Component",
    registration_form: "Registration Form",
    enter_details: "Enter your details to create an account",
    full_name: "Full Name",
    email: "Email",
    password: "Password",
    confirm_password: "Confirm Password",
    register: "Register",
    email_privacy: "We'll never share your email with anyone else.",
    passwords_not_match: "Passwords do not match",
    invoices: "A list of recent invoices",
    status: "Status",
    method: "Method",
    amount: "Amount",
    paid: "Paid",
    pending: "Pending",
    unpaid: "Unpaid",
    // Dashboard
    dashboard: "Dashboard",
    total_users: "Total Users",
    active_users: "Active Users",
    system_status: "System Status",
    online: "Online",
    all_systems_operational: "All systems operational",
    from_last_month: "from last month",
    // Menu
    menu: "Menu",
    Home: "Home",
    Request_to_join_Member: " Request to join Member",
    Beneficiary_Request: "Beneficiary Request",
    Financial_Management: "Financial Management",
    Member_Management: "Member Management",
    store_management: "store management",
    Beneficiary_Management: "Beneficiary Management",
    Meeting_Management: "Meeting Management",
    Service_Management: "Service Management",
    Frequently_Asked_Question: "Frequently Asked Question",
    Technical_Support: "Technical Support",
    Membership: "Membership",
    Vote: "Vote",
    Common_Questions: "Common Questions",
    Available_services: "Available services",
    My_Services: "My Services",
    // User Management
    users: "Users",
    add_user: "Add User",
    edit_user: "Edit User",
    delete_user: "Delete User",
    username: "Username",
    mobile: "Mobile",
    role: "Role",
    last_login: "Last Login",
    login: "Login",
    actions: "Actions",
    active: "Active",
    inactive: "Inactive",
    edit: "Edit",
    delete: "Delete",
    loading: "Loading",
    no_users_found: "No users found",
    user_created: "User created successfully",
    user_updated: "User updated successfully",
    user_deleted: "User deleted successfully",
    error_fetching_users: "Error fetching users",
    error_deleting_user: "Error deleting user",
    search_users: "Search users...",
    username_required: "Username is required",
    email_required: "Email is required",
    invalid_email: "Invalid email format",
    password_required: "Password is required",
    password_too_short: "Password must be at least 8 characters",
    mobile_required: "Mobile number is required",
    leave_blank_to_keep_current: "Leave blank to keep current password",
    update: "Update",
    create: "Create",
    confirm_delete: "Confirm Delete",
    delete_confirmation_message:
      "Are you sure you want to delete user '{username}'? This action cannot be undone.",
    // API Connection Error
    api_connection_error: "API Connection Error",
    api_connection_error_message:
      "Unable to connect to the API. Please check your connection and try again.",
    retry: "Retry",
    troubleshooting: "Troubleshooting",
    check_api_url: "Check API URL",
    check_api_running: "Ensure the API server is running",
    check_cors_settings: "Verify CORS settings on the API server",
    check_network_connection: "Check your network connection",
  },
  ar: {
    login_to_continue: "تسجيل الدخول للمتابعة",
    search: "بحث",
    search_placeholder: "ابحث هنا...",
    clear: "مسح",
    previous: "السابق",
    next: "التالي",
    page: "صفحة",
    of: "من",
    submit: "إرسال",
    cancel: "إلغاء",
    close: "إغلاق",
    success: "نجاح",
    error: "خطأ",
    info: "معلومات",
    warning: "تحذير",
    notification_title: "إشعار",
    notification_message: "هذه رسالة إشعار",
    enter_otp: "أدخل رمز التحقق",
    invalid_otp: "رمز التحقق غير صالح",
    language: "اللغة",
    english: "الإنجليزية",
    arabic: "العربية",
    ui_components_demo: "عرض مكونات واجهة المستخدم",
    buttons: "الأزرار",
    cards: "البطاقات",
    forms: "النماذج",
    tables: "الجداول",
    search_component: "مكون البحث",
    pagination_component: "مكون الصفحات",
    notification_component: "مكون الإشعارات",
    otp_component: "مكون إدخال رمز التحقق",
    registration_form: "نموذج التسجيل",
    enter_details: "أدخل بياناتك لإنشاء حساب",
    full_name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    confirm_password: "تأكيد كلمة المرور",
    register: "تسجيل",
    email_privacy: "لن نشارك بريدك الإلكتروني مع أي شخص آخر.",
    passwords_not_match: "كلمات المرور غير متطابقة",
    invoices: "قائمة الفواتير الأخيرة",
    status: "الحالة",
    method: "الطريقة",
    amount: "المبلغ",
    paid: "مدفوع",
    pending: "قيد الانتظار",
    unpaid: "غير مدفوع",
    // Dashboard
    dashboard: "لوحة التحكم",
    total_users: "إجمالي المستخدمين",
    active_users: "المستخدمين النشطين",
    system_status: "حالة النظام",
    online: "متصل",
    all_systems_operational: "جميع الأنظمة تعمل",
    from_last_month: "من الشهر الماضي",
    // Menu
    menu: "القائمة",
    Home: "الرئيسية",
    Request_to_join_Member: "طلب الانضمام للعضوية",
    Beneficiary_Request: "طلب مستفيد",
    Financial_Management: "إدارة مالية",
    Member_Management: "إدارة الأعضاء",
    store_management: "إدارة المتجر",
    Beneficiary_Management: "إدارة المستفيدين",
    Meeting_Management: "إدارة الاجتماعات",
    Service_Management: "إدارة الخدمات",
    Frequently_Asked_Question: "القائمة القائمة",
    Technical_Support: "الدعم الفني",
    Membership: "العضوية",
    Vote: "التصويت",
    Common_Questions: "الأسئلة الشائعة",
    Available_services: "الخدمات المتاحة",
    My_Services: "خدماتي",
    // User Management
    users: "المستخدمين",
    add_user: "إضافة مستخدم",
    edit_user: "تعديل مستخدم",
    delete_user: "حذف مستخدم",
    username: "اسم المستخدم",
    mobile: "الجوال",
    role: "الدور",
    last_login: "آخر تسجيل دخول",
    login: "تسجيل الدخول",
    actions: "الإجراءات",
    active: "نشط",
    inactive: "غير نشط",
    edit: "تعديل",
    delete: "حذف",
    loading: "جاري التحميل",
    no_users_found: "لم يتم العثور على مستخدمين",
    user_created: "تم إنشاء المستخدم بنجاح",
    user_updated: "تم تحديث المستخدم بنجاح",
    user_deleted: "تم حذف المستخدم بنجاح",
    error_fetching_users: "خطأ في جلب المستخدمين",
    error_deleting_user: "خطأ في حذف المستخدم",
    search_users: "البحث عن مستخدمين...",
    username_required: "اسم المستخدم مطلوب",
    email_required: "البريد الإلكتروني مطلوب",
    invalid_email: "صيغة البريد الإلكتروني غير صحيحة",
    password_required: "كلمة المرور مطلوبة",
    password_too_short: "يجب أن تكون كلمة المرور 8 أحرف على الأقل",
    mobile_required: "رقم الجوال مطلوب",
    leave_blank_to_keep_current: "اتركه فارغًا للاحتفاظ بكلمة المرور الحالية",
    update: "تحديث",
    create: "إنشاء",
    confirm_delete: "تأكيد الحذف",
    delete_confirmation_message:
      "هل أنت متأكد من حذف المستخدم '{username}'؟ لا يمكن التراجع عن هذا الإجراء.",
    // API Connection Error
    api_connection_error: "خطأ في الاتصال بالواجهة البرمجية",
    api_connection_error_message:
      "تعذر الاتصال بالواجهة البرمجية. يرجى التحقق من اتصالك والمحاولة مرة أخرى.",
    retry: "إعادة المحاولة",
    troubleshooting: "استكشاف الأخطاء وإصلاحها",
    check_api_url: "تحقق من عنوان URL للواجهة البرمجية",
    check_api_running: "تأكد من تشغيل خادم الواجهة البرمجية",
    check_cors_settings: "تحقق من إعدادات CORS على خادم الواجهة البرمجية",
    check_network_connection: "تحقق من اتصال الشبكة الخاص بك",
  },
};
