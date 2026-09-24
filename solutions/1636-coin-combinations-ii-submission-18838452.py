import sys
import io
import heapq 
INF = float("inf")
MOD = 10**9 + 7
 
# sys.stdin = io.StringIO("""\
# 3 9
# 2 3 5
# """)
 
input = sys.stdin.readline
 
def solve():
    n=list(map(int,input().split()))
    a=list(map(int,input().split()))
 
    dp=[0]*(n[1]+1)
    dp[0]=1
 
    # for i in range(1,len(dp)):
    #     for coin in a:
    #         if coin>i:
    #             break
    #         dp[i]+=dp[i-coin]
    a.sort()
    for coin in a:
        for i in range(coin,len(dp)):
            dp[i]+=dp[i-coin]
            dp[i]%=MOD
    print(dp[n[1]])
 
 
def main():
    # t = int(input())
 
    # for _ in range(t):
    #     solve()
 
    solve()
main()
