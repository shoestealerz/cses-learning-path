import sys
import io
import heapq 
INF = float("inf")
MOD = 10**9 + 7
 
# sys.stdin = io.StringIO("""\
# 4
# """)
 
input = sys.stdin.readline
 
def solve():
    n=int(input())
    # n=list(map(int,input().split()))
    # a=list(map(int,input().split()))
 
    dp=[float('inf')]*(n+1)
 
    if n<10:
        print(1)
        return
 
    for i in range(10):
        dp[i]=1
 
    for i in range(10,n+1):
        val=float('inf')
        for char in str(i):
            val=min(val,dp[i-int(char)]+1)
        dp[i]=val%MOD
    print(dp[n])
 
 
def main():
    # t = int(input())
 
    # for _ in range(t):
    #     solve()
 
    solve()
main()
