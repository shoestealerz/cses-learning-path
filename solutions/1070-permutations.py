import sys
import io
import heapq 
INF = float("inf")
MOD = 10**9 + 7
from collections import deque
 
# sys.stdin = io.StringIO("""\
# 8
# """)
 
input = sys.stdin.readline
 
def solve():
    n=int(input())
    # a=list(map(int,input().split()))
    if n==1:
        print('1')
        return
    elif n==4:
        print('2 4 1 3')
        return
 
    if n<5:
        print('NO SOLUTION')
        return
    output=deque(list(map(str,[4,2,5,3,1])))
    turn=1
    for i in range(6,n+1):
        if turn==1:
            output.appendleft(str(i))
            turn*=-1
        else:
            output.append(str(i))
            turn*=-1
    print(' '.join(list(output)))
 
 
 
 
def main():
    # t = int(input())
 
    # for _ in range(t):
    #     solve()
 
    solve()
main()
