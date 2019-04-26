from rest_framework.routers import  DefaultRouter
from .views import RfqSupplierHeaderViewSet, RfqSupplierDetailViewSet,RfqGetLastIDViewSet

router = DefaultRouter()
router.register(r'rfq_header',RfqSupplierHeaderViewSet, basename='rfq_header')
router.register(r'rfq_detail',RfqSupplierDetailViewSet, basename='rfq_detail')
router.register(r'rfq_get_last_id',RfqGetLastIDViewSet, basename='get_last_id')

urlpatterns = router.urls
