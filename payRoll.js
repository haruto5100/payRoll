// ボタンのクリックイベントリスナー
document.getElementById('calculate').addEventListener('click', function () {
    // 時給の設定を取得
    const komaRate = parseFloat(document.getElementById('komaRate').value) || 0;
    const procraRate = parseFloat(document.getElementById('procraRate').value) || 0;
    const dailyAllowanceRate = parseFloat(document.getElementById('dailyAllowanceRate').value) || 0;
    const adminAllowanceRate = parseFloat(document.getElementById('adminAllowanceRate').value) || 0;

    // 入力値を取得
    const koma = parseInt(document.getElementById('koma').value) || 0;
    const procra = parseInt(document.getElementById('procra').value) || 0;
    const dailyAllowance = parseFloat(document.getElementById('dailyAllowance').value) || 0;
    const adminAllowance = parseFloat(document.getElementById('adminAllowance').value) || 0;

    // 給与計算ロジック
    const salary = (koma * komaRate) + 
                   (procra * procraRate) + 
                   (dailyAllowance * dailyAllowanceRate) + 
                   (adminAllowance * adminAllowanceRate);

    // 結果を表示
    const resultElement = document.getElementById('result');
    resultElement.textContent = `合計給与: ${salary.toFixed(0)}円`;
});