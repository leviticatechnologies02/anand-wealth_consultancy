<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Invalid request"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

function safe($v) {
    return htmlspecialchars(trim($v ?? ""), ENT_QUOTES, 'UTF-8');
}

$name              = safe($data['name']);
$email             = safe($data['email']);
$phone             = safe($data['phone']);
$investmentType    = safe($data['investmentType']);
$riskAppetite      = safe($data['riskAppetite']);
$annualIncome      = safe($data['annualIncome']);
$investmentHorizon = safe($data['investmentHorizon']);
$preferredContact  = safe($data['preferredContact']);
$subject           = safe($data['subject']);
$message           = nl2br(safe($data['message']));
$honeypot          = $data['website'] ?? "";

// Stop spam bots
if (!empty($honeypot)) {
    echo json_encode(["success" => false, "message" => "Spam detected"]);
    exit;
}

// REQUIRED VALIDATION
if (!$name || !$email || !$phone || !$investmentType || !$riskAppetite || !$annualIncome || !$investmentHorizon || !$preferredContact || !$subject || !$message) {
    echo json_encode(["success" => false, "message" => "Missing fields"]);
    exit;
}

// RECEIVING EMAIL
$to = "info@anandwealth.com";

// Email subject
$mailSubject = "New Wealth Consultation Request — $name";

// HTML message
$html = "
<h2 style='color:#0F172A;'>New Wealth Consultation Request</h2>
<p><strong>Name:</strong> $name</p>
<p><strong>Email:</strong> $email</p>
<p><strong>Phone:</strong> $phone</p>
<p><strong>Investment Type:</strong> $investmentType</p>
<p><strong>Risk Appetite:</strong> $riskAppetite</p>
<p><strong>Annual Income:</strong> $annualIncome</p>
<p><strong>Investment Horizon:</strong> $investmentHorizon</p>
<p><strong>Preferred Contact:</strong> $preferredContact</p>
<p><strong>Subject:</strong> $subject</p>

<hr/>
<p><strong>Message:</strong></p>
<p>$message</p>

<br><br>
<p style='color:#64748B;font-size:13px;'>This email was sent from Anand Wealth Consultancy website contact form.</p>
";

// headers
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: Anand Wealth Website <no-reply@anandwealth.com>\r\n";

// Send Email
if (mail($to, $mailSubject, $html, $headers)) {
    echo json_encode(["success" => true, "message" => "Email sent"]);
} else {
    echo json_encode(["success" => false, "message" => "Mail function failed"]);
}
?>
