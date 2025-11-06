#!/bin/bash

# Test Email Notification System
# This script tests all email notification endpoints

BASE_URL="${BASE_URL:-http://localhost:3000}"
TEST_EMAIL="${TEST_EMAIL:-your@email.com}"
WEBHOOK_SECRET="${WEBHOOK_SECRET:-your_webhook_secret}"

echo "🧪 Testing BareUptime Email Notification System"
echo "================================================"
echo ""
echo "Base URL: $BASE_URL"
echo "Test Email: $TEST_EMAIL"
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test 1: Health Check
echo "1️⃣  Testing notification endpoint health check..."
response=$(curl -s -w "\n%{http_code}" "$BASE_URL/api/notifications")
http_code=$(echo "$response" | tail -n1)
body=$(echo "$response" | head -n-1)

if [ "$http_code" = "200" ]; then
    echo -e "${GREEN}✓ Health check passed${NC}"
    echo "   Response: $body"
else
    echo -e "${RED}✗ Health check failed (HTTP $http_code)${NC}"
fi
echo ""

# Test 2: Send Test Email
echo "2️⃣  Sending test email to $TEST_EMAIL..."
response=$(curl -s -w "\n%{http_code}" -X POST "$BASE_URL/api/test-email" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"$TEST_EMAIL\"}")
http_code=$(echo "$response" | tail -n1)
body=$(echo "$response" | head -n-1)

if [ "$http_code" = "200" ]; then
    echo -e "${GREEN}✓ Test email sent successfully${NC}"
    echo "   Response: $body"
else
    echo -e "${RED}✗ Test email failed (HTTP $http_code)${NC}"
    echo "   Response: $body"
fi
echo ""

# Test 3: Monitor Down Notification
echo "3️⃣  Testing monitor down notification..."
response=$(curl -s -w "\n%{http_code}" -X POST "$BASE_URL/api/notifications" \
  -H "Content-Type: application/json" \
  -H "x-webhook-secret: $WEBHOOK_SECRET" \
  -d "{
    \"type\": \"monitor_down\",
    \"email\": \"$TEST_EMAIL\",
    \"data\": {
      \"monitorName\": \"Test Production API\",
      \"monitorUrl\": \"https://api.example.com\",
      \"statusCode\": 500,
      \"errorMessage\": \"Internal Server Error\",
      \"timestamp\": \"$(date -u '+%Y-%m-%d %H:%M:%S UTC')\",
      \"incidentId\": \"inc_test_123\",
      \"statusPageUrl\": \"https://status.example.com/inc_test_123\"
    }
  }")
http_code=$(echo "$response" | tail -n1)
body=$(echo "$response" | head -n-1)

if [ "$http_code" = "200" ]; then
    echo -e "${GREEN}✓ Monitor down notification sent${NC}"
    echo "   Response: $body"
else
    echo -e "${RED}✗ Monitor down notification failed (HTTP $http_code)${NC}"
    echo "   Response: $body"
fi
echo ""

# Test 4: Monitor Up Notification
echo "4️⃣  Testing monitor recovered notification..."
response=$(curl -s -w "\n%{http_code}" -X POST "$BASE_URL/api/notifications" \
  -H "Content-Type: application/json" \
  -H "x-webhook-secret: $WEBHOOK_SECRET" \
  -d "{
    \"type\": \"monitor_up\",
    \"email\": \"$TEST_EMAIL\",
    \"data\": {
      \"monitorName\": \"Test Production API\",
      \"monitorUrl\": \"https://api.example.com\",
      \"downtime\": \"5 minutes 30 seconds\",
      \"timestamp\": \"$(date -u '+%Y-%m-%d %H:%M:%S UTC')\",
      \"incidentId\": \"inc_test_123\",
      \"statusPageUrl\": \"https://status.example.com/inc_test_123\"
    }
  }")
http_code=$(echo "$response" | tail -n1)
body=$(echo "$response" | head -n-1)

if [ "$http_code" = "200" ]; then
    echo -e "${GREEN}✓ Monitor recovered notification sent${NC}"
    echo "   Response: $body"
else
    echo -e "${RED}✗ Monitor recovered notification failed (HTTP $http_code)${NC}"
    echo "   Response: $body"
fi
echo ""

# Test 5: Monitor Created Notification
echo "5️⃣  Testing monitor created notification..."
response=$(curl -s -w "\n%{http_code}" -X POST "$BASE_URL/api/notifications" \
  -H "Content-Type: application/json" \
  -H "x-webhook-secret: $WEBHOOK_SECRET" \
  -d "{
    \"type\": \"monitor_created\",
    \"email\": \"$TEST_EMAIL\",
    \"data\": {
      \"monitorName\": \"New Test Monitor\",
      \"monitorUrl\": \"https://example.com\",
      \"checkInterval\": \"5 minutes\",
      \"statusPageUrl\": \"https://status.example.com/monitor_123\",
      \"dashboardUrl\": \"https://app.bareuptime.co/monitors/123\"
    }
  }")
http_code=$(echo "$response" | tail -n1)
body=$(echo "$response" | head -n-1)

if [ "$http_code" = "200" ]; then
    echo -e "${GREEN}✓ Monitor created notification sent${NC}"
    echo "   Response: $body"
else
    echo -e "${RED}✗ Monitor created notification failed (HTTP $http_code)${NC}"
    echo "   Response: $body"
fi
echo ""

# Test 6: SSL Expiry Notification
echo "6️⃣  Testing SSL expiry notification..."
response=$(curl -s -w "\n%{http_code}" -X POST "$BASE_URL/api/notifications" \
  -H "Content-Type: application/json" \
  -H "x-webhook-secret: $WEBHOOK_SECRET" \
  -d "{
    \"type\": \"ssl_expiry\",
    \"email\": \"$TEST_EMAIL\",
    \"data\": {
      \"monitorName\": \"Production Website\",
      \"monitorUrl\": \"https://example.com\",
      \"daysUntilExpiry\": 7,
      \"expiryDate\": \"$(date -u -d '+7 days' '+%Y-%m-%d')\",
      \"certificateIssuer\": \"Let's Encrypt\"
    }
  }")
http_code=$(echo "$response" | tail -n1)
body=$(echo "$response" | head -n-1)

if [ "$http_code" = "200" ]; then
    echo -e "${GREEN}✓ SSL expiry notification sent${NC}"
    echo "   Response: $body"
else
    echo -e "${RED}✗ SSL expiry notification failed (HTTP $http_code)${NC}"
    echo "   Response: $body"
fi
echo ""

echo "================================================"
echo "✅ Testing complete!"
echo ""
echo -e "${YELLOW}Note: Check your email inbox ($TEST_EMAIL) for the test emails.${NC}"
echo -e "${YELLOW}If emails are not arriving, verify:${NC}"
echo "  1. RESEND_API_KEY is set correctly"
echo "  2. EMAIL_FROM is verified in Resend"
echo "  3. Check spam/junk folder"
echo ""
