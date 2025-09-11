import os
import sys
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../..')))
from time import sleep
import numpy as np
import pickle
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import math


def yaw_to_quat(yaw_deg):
    yaw = math.radians(yaw_deg)
    w = math.cos(yaw / 2)
    z = math.sin(yaw / 2)
    return (0.0, 0.0, z, w)


def collect_lidar_data(beamng, lidar_data):    
    # Storage for collected point clouds
    all_point_clouds = []
    
    import time
    print("Collecting LiDAR data for 1 minute...")
    start_time = time.time()
    frame_count = 0
    while time.time() - start_time < 60:
        beamng.control.step(10)
        readings_data = lidar_data
        point_cloud = readings_data["pointCloud"]
        all_point_clouds.append(point_cloud)
        frame_count += 1
        print(f"Collected frame {frame_count}: {len(point_cloud)} points")

    return all_point_clouds