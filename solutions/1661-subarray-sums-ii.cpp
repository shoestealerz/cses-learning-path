#include <bits/stdc++.h>
using namespace std;
 
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
 
    int n;
    long long target;
    cin >> n >> target;
 
    vector<long long> prefix(n + 1, 0);
 
    for (int i = 1; i <= n; i++) {
        long long x;
        cin >> x;
        prefix[i] = prefix[i - 1] + x;
    }
 
    vector<long long> ordered = prefix;
    sort(ordered.begin(), ordered.end());
 
    vector<long long> freq(n + 1, 0);
 
    long long ans = 0;
 
    for (long long p : prefix) {
        long long need = p - target;
 
        int j = lower_bound(ordered.begin(), ordered.end(), need) - ordered.begin();
 
        if (j <= n && ordered[j] == need) {
            ans += freq[j];
        }
 
        j = lower_bound(ordered.begin(), ordered.end(), p) - ordered.begin();
        freq[j]++;
    }
 
    cout << ans << '\n';
}
