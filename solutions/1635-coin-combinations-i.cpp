#include <bits/stdc++.h>
using namespace std;
 
const int MOD = 1e9 + 7;
 
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
 
    int n, x;
    cin >> n >> x;
 
    vector<int> coins(n);
    for (int &c : coins) cin >> c;
 
    sort(coins.begin(), coins.end());
 
    vector<int> dp(x + 1);
    dp[0] = 1;
 
    for (int i = 1; i <= x; i++) {
        long long ways = 0;
 
        for (int coin : coins) {
            if (coin > i) break;
 
            ways += dp[i - coin];
 
            // Prevent ways from growing too large.
            if (ways >= MOD)
                ways %= MOD;
        }
 
        dp[i] = ways % MOD;
    }
 
    cout << dp[x] << '\n';
}
