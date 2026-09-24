import sys
import io
import heapq 
INF = float("inf")
MOD = 10**9 + 7
 
# sys.stdin = io.StringIO("""\
# 4
# ....
# .*..
# ...*
# *...
# """)
 
input = sys.stdin.readline
 
def solve():
    n=int(input())
    # n=list(map(int,input().split()))
    # a=list(map(int,input().split()))
    data=[]
    for i in range(n):
        data.append(str(input().split()[0]))
 
    dp=[[0]*len(data[0]) for _ in range(len(data))]
    dp[0][0]=1
    if data[0][0]=='*':
        print(0)
        return
    for y in range(len(data)):
        for x in range(len(data[y])):
            if data[y][x]=='*':
                continue
            left=x-1
            if left>=0 and left<len(data[y]):
                dp[y][x]+=dp[y][left]
            up=y-1
            if up>=0 and up<len(data):
                dp[y][x]+=dp[up][x]
            dp[y][x]%=MOD
    print(dp[len(data)-1][len(data[0])-1])
 
 
def main():
    # t = int(input())
 
    # for _ in range(t):
    #     solve()
 
    solve()
main()
