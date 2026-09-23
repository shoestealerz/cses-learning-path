import sys
import io
import heapq 
INF = float("inf")
MOD = 10**9 + 7
 
# sys.stdin = io.StringIO("""\
# 3 10
# 1 2 3
# """)
 
input = sys.stdin.readline
 
def solve():
    n=list(map(int,input().split()))
    a=list(map(int,input().split()))
    num=n[0]
    max_weight=n[1]
    children_weights=a
 
    res=1
    children_weights.sort()
    running=0
    curr_num=0
    left=0
    right=len(children_weights)-1
    while left<=right:
        smallest=children_weights[left]
        largest=children_weights[right]
        if running+smallest+largest<=max_weight and curr_num==0:
            left+=1
            right-=1
            running+=smallest+largest
            curr_num=2
        elif running+largest<=max_weight and curr_num<2:
            right-=1
            running+=largest
            curr_num+=1
        elif running+smallest<=max_weight and curr_num<2:
            left+=1
            running+=smallest
            curr_num+=1
        else:
            running=0
            res+=1
            curr_num=0
    print(res)
 
 
 
def main():
    # t = int(input())
 
    # for _ in range(t):
    #     solve()
 
    solve()
main()
