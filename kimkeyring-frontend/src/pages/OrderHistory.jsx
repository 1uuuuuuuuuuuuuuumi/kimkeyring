import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

function OrderHistory() {
  const navigate = useNavigate();
  const { user, isLoggedIn } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // 로그인 체크
  useEffect(() => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  // 주문 목록 불러오기
  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;

      try {
        const response = await axios.get(
          `http://localhost:8080/api/orders?userId=${user.userId}`,
        );
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        console.error("주문 목록 조회 오류:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  // 날짜 포맷
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // 상태 한글 변환
  const getStatusText = (status) => {
    const statusMap = {
      PENDING: "주문 대기",
      PAID: "결제 완료",
      SHIPPED: "배송 중",
      DELIVERED: "배송 완료",
      CANCELLED: "주문 취소",
    };
    return statusMap[status] || status;
  };

  if (loading) {
    return (
      <div>
        <Header />
        <main style={{ padding: "40px", textAlign: "center" }}>
          <p>주문 내역을 불러오는 중...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ marginBottom: "24px" }}>주문 내역</h2>

        {orders.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <p
              style={{ fontSize: "18px", color: "#666", marginBottom: "24px" }}
            >
              주문 내역이 없습니다.
            </p>
            <button
              onClick={() => navigate("/")}
              style={{
                padding: "12px 24px",
                fontSize: "16px",
                background: "#ff6b9d",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              쇼핑 하러 가기
            </button>
          </div>
        ) : (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {orders.map((order) => (
              <div
                key={order.orderId}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "24px",
                  backgroundColor: "#fff",
                }}
              >
                {/* 주문 정보 */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                    paddingBottom: "16px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#666",
                        marginBottom: "8px",
                      }}
                    >
                      주문번호: {order.orderId}
                    </p>
                    <p style={{ fontSize: "14px", color: "#666" }}>
                      주문일시: {formatDate(order.createdAt)}
                    </p>
                  </div>
                  <div
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "#f0f0f0",
                      borderRadius: "4px",
                      fontWeight: "bold",
                    }}
                  >
                    {getStatusText(order.status)}
                  </div>
                </div>

                {/* 배송지 정보 */}
                <div style={{ marginBottom: "16px" }}>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      marginBottom: "4px",
                    }}
                  >
                    배송지
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    {order.address} {order.addressDetail}
                  </p>
                </div>

                {/* 주문 상품 목록 */}
                <div style={{marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #eee'}}>
                  <p style={{fontSize: '14px', color: '#666', marginBottom: '12px'}}>
                    주문 상품
                  </p>
                  {order.items && order.items.map(item => (
                    <div
                      key={item.orderItemId}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '8px',
                        backgroundColor: '#f9f9f9',
                        borderRadius: '4px',
                        marginBottom: '8px'
                      }}
                    >
                      <img
                        src={item.productImageUrl}
                        alt={item.productName}
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '4px',
                          marginRight: '12px'
                        }}
                      />
                      <div style={{flex: 1}}>
                        <p style={{fontWeight: 'bold', marginBottom: '4px'}}>
                          {item.productName}
                        </p>
                        <p style={{fontSize: '14px', color: '#666'}}>
                          {item.price.toLocaleString()}원 x {item.quantity}개
                        </p>
                      </div>
                      <span style={{fontWeight: 'bold'}}>
                        {(item.price * item.quantity).toLocaleString()}원
                      </span>
                    </div>
                  ))}
                </div>

                {/* 결제 금액 */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "16px",
                    borderTop: "1px solid #eee",
                  }}
                >
                  <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                    총 결제 금액
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#ff6b9d",
                    }}
                  >
                    {order.totalPrice.toLocaleString()}원
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default OrderHistory;