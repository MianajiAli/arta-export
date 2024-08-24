import os

def rename_files_in_directory(directory):
    # Collect all files in the directory and subdirectories
    files = []
    for root, dirs, filenames in os.walk(directory):
        for filename in filenames:
            files.append(os.path.join(root, filename))
    
    # Sort files to ensure consistent ordering
    files.sort()
    
    # Rename files
    for index, file_path in enumerate(files, start=1):
        directory_path = os.path.dirname(file_path)
        new_filename = f"{index}{os.path.splitext(file_path)[1]}"
        new_file_path = os.path.join(directory_path, new_filename)
        
        os.rename(file_path, new_file_path)
        print(f"Renamed {file_path} to {new_file_path}")

if __name__ == "__main__":
    # Replace 'your_directory_path' with the path to your target directory
    target_directory = 'your_directory_path'
    rename_files_in_directory(target_directory)
