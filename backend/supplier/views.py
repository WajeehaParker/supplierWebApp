from rest_framework import viewsets
from supplier.models import RfqSupplierHeader, RfqSupplierDetail
from .serializers import RfqSupplierHeaderSerializer, RfqSupplierDetailSerializer,RfqGetLastIDSerializer
from collections import namedtuple

class RfqSupplierHeaderViewSet(viewsets.ModelViewSet):
    queryset = RfqSupplierHeader.objects.all()
    serializer_class = RfqSupplierHeaderSerializer

class RfqSupplierDetailViewSet(viewsets.ModelViewSet):
    queryset = RfqSupplierDetail.objects.all()
    serializer_class = RfqSupplierDetailSerializer

class RfqGetLastIDViewSet(viewsets.ModelViewSet):
    queryset = (RfqSupplierHeader.objects.last(),)
    serializer_class = RfqGetLastIDSerializer
