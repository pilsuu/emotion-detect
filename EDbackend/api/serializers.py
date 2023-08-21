from .models import Chats, Board
from rest_framework import serializers


class ChatsListSerializer(serializers.ModelSerializer):
    text = serializers.CharField(source='content')
    isUser = serializers.SerializerMethodField()

    class Meta:
        model = Chats
        fields = ('text', 'isUser')

    def get_isUser(self, obj):
        if self.context.get('user_id') == obj.sender_id:
            return True
        return False


class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        fields = "__all__"
