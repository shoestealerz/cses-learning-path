import sys
import io
import heapq 
INF = float("inf")
MOD = 10**9 + 7
 
# sys.stdin = io.StringIO("""\
# 3 11
# 1 5 7
# """)
 
input = sys.stdin.readline
 
def solve():
    n=list(map(int,input().split()))
    a=list(map(int,input().split()))
 
    dp=[float('inf')]*(n[1]+1)
    dp[0]=0
    a.sort()
    for i in range(1,len(dp)):
        for coin in a:
            if i-coin>=0:
                dp[i]=min(dp[i],dp[i-coin]+1)
            else:
                break
    if dp[n[1]]==float('inf'):
        print(-1)
    else:
        print(dp[n[1]])
 
 
def main():
    # t = int(input())
 
    # for _ in range(t):
    #     solve()
 
    solve()
main()
